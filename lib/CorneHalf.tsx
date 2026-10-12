import { CPG135001S30 } from "../imports/CPG135001S30/CPG135001S30"
import { B_2100S04P_A110 } from "../imports/B_2100S04P_A110/B_2100S04P_A110"
import { A_2_54_1_3P_ } from "../imports/A_2_54_1_3P_/A_2_54_1_3P_"
import { reviewedRightAutorouter } from "./routing/reviewed-right"
import { reviewedLeftAutorouter } from "./routing/reviewed-left"
import { Fragment } from "react"
import { A_0402WGF1001TCE } from "../imports/A_0402WGF1001TCE/A_0402WGF1001TCE"
import { A_0402WGF1002TCE } from "../imports/A_0402WGF1002TCE/A_0402WGF1002TCE"
import { A_0402WGF270JTCE } from "../imports/A_0402WGF270JTCE/A_0402WGF270JTCE"
import { A_0402WGF5101TCE } from "../imports/A_0402WGF5101TCE/A_0402WGF5101TCE"
import { A_0402WGF5601TCE } from "../imports/A_0402WGF5601TCE/A_0402WGF5601TCE"
import { A_1N4148WT } from "../imports/A_1N4148WT/A_1N4148WT"
import { CC0402JRNPO9BN270 } from "../imports/CC0402JRNPO9BN270/CC0402JRNPO9BN270"
import { CL05A105KA5NQNC } from "../imports/CL05A105KA5NQNC/CL05A105KA5NQNC"
import { CL05A106MQ5NUNC } from "../imports/CL05A106MQ5NUNC/CL05A106MQ5NUNC"
import { CL05B104KO5NNNC } from "../imports/CL05B104KO5NNNC/CL05B104KO5NNNC"
import { NCP1117LPST33T3G } from "../imports/NCP1117LPST33T3G/NCP1117LPST33T3G"
import { PJ_399B_6A } from "../imports/PJ_399B_6A/PJ_399B_6A"
import { Q22FA23V00418 } from "../imports/Q22FA23V00418/Q22FA23V00418"
import { RB521S30T1G } from "../imports/RB521S30T1G/RB521S30T1G"
import { RP2040 } from "../imports/RP2040/RP2040"
import { SK6812MINI_E } from "../imports/SK6812MINI_E/SK6812MINI_E"
import { TPD4E05U06DQAR } from "../imports/TPD4E05U06DQAR/TPD4E05U06DQAR"
import { TS_1088R_02026 } from "../imports/TS_1088R_02026/TS_1088R_02026"
import { TYPE_C_31_M_13C } from "../imports/TYPE_C_31_M_13C/TYPE_C_31_M_13C"
import { W25Q128JVSIQ } from "../imports/W25Q128JVSIQ/W25Q128JVSIQ"
import { ChocKey } from "./ChocKey"
import corneChocolateLeft from "./generated/corne-chocolate-v4.1-left.layout.json"
import corneChocolateRight from "./generated/corne-chocolate-v4.1-right.layout.json"

export type CorneSide = "left" | "right"

type LayoutElement = Record<string, any> & { type: string }
type ComponentSpec = Record<string, any> & {
  kind: "chip" | "switch" | "resistor" | "capacitor"
  name: string
  layer: "top" | "bottom"
  footprint: LayoutElement[]
}
type CorneLayout = {
  outline: Array<{ x: number; y: number }>
  components: ComponentSpec[]
  connections: Array<{
    name: string
    selectors: string[]
    thickness?: number
  }>
  boardHoles: Array<Record<string, any>>
}

const oscillatorNetNames = new Set([
  "Net_U1_XIN",
  "Net_C2_Pad1",
  "Net_U1_XOUT",
])

const getCanonicalNetName = (name: string) => {
  if (name === "rGND" || name === "GNDR") return "GND"
  if (name.startsWith("rNet_")) return name.slice(1)
  if (name.startsWith("Net_r")) return `Net_${name.slice(5)}`
  return name
}

const getUnprefixedReference = (name: string) =>
  name.startsWith("r") && /^[A-Z]/.test(name.slice(1)) ? name.slice(1) : name

const normalizeRotation = (rotation: number) => {
  const normalized = rotation % 360
  return normalized < 0 ? normalized + 360 : normalized
}

const getJlcComponent = (component: ComponentSpec) => {
  const reference = getUnprefixedReference(component.name)

  if (reference === "J3") return B_2100S04P_A110
  if (reference === "J4") return A_2_54_1_3P_
  if (reference === "J1") return TYPE_C_31_M_13C
  if (reference === "J2") return PJ_399B_6A
  if (reference === "U1") return RP2040
  if (reference === "U2") return NCP1117LPST33T3G
  if (reference === "U3") return TPD4E05U06DQAR
  if (reference === "U4") return W25Q128JVSIQ
  if (reference === "Y1") return Q22FA23V00418
  if (reference === "D1") return A_1N4148WT
  if (reference === "ZD1") return RB521S30T1G
  if (/^SMDSW\d+$/.test(reference)) return TS_1088R_02026
  if (/^(?:EX)?LED\d+$/.test(reference)) return SK6812MINI_E

  if (component.kind === "resistor") {
    const resistance = String(component.resistance).toLowerCase()
    if (resistance === "5.1k" || ["R1", "R2"].includes(reference)) {
      return A_0402WGF5101TCE
    }
    if (resistance === "1k" || ["R3", "R6"].includes(reference)) {
      return A_0402WGF1001TCE
    }
    if (resistance === "27" || ["R4", "R5"].includes(reference)) {
      return A_0402WGF270JTCE
    }
    if (resistance === "10k" || ["R7", "R9"].includes(reference)) {
      return A_0402WGF1002TCE
    }
    if (resistance === "5.6k" || reference === "R8") {
      return A_0402WGF5601TCE
    }
  }

  if (component.kind === "capacitor") {
    const capacitance = String(component.capacitance).toLowerCase()
    if (capacitance === "27p" || ["C1", "C2"].includes(reference)) {
      return CC0402JRNPO9BN270
    }
    if (
      capacitance === "100n" ||
      ["C3", "C4", "C7", "C9", "C10", "C12", "C13", "C14", "C15"].includes(
        reference,
      )
    ) {
      return CL05B104KO5NNNC
    }
    if (capacitance === "1u" || ["C5", "C8", "C16"].includes(reference)) {
      return CL05A105KA5NQNC
    }
    if (capacitance === "10u" || ["C6", "C11"].includes(reference)) {
      return CL05A106MQ5NUNC
    }
  }

  return null
}

const getJlcPlacement = (component: ComponentSpec) => {
  const reference = getUnprefixedReference(component.name)
  let pcbX = component.pcbX
  let pcbY = component.pcbY
  let pcbRotation = component.pcbRotation ?? 0

  // Align vendor footprint datums to the mechanical locations in the KiCad
  // board. These offsets were measured using matching pins, not courtyard
  // centers, so edge-mounted connectors stay flush with the board outline.
  if (reference === "J4") {
    pcbX -= 2.54
    pcbRotation = 0
  } else if (reference === "J1") {
    pcbY -= 3.025
    pcbRotation += 180
  } else if (reference === "J2") {
    pcbX += component.name.startsWith("r") ? 7.7 : -7.7
    pcbRotation -= 90
  } else if (/^(?:EX)?LED\d+$/.test(reference)) {
    // KiCad's bottom-side component angle is mirrored relative to tscircuit's
    // imported component transform. Axis-aligned LEDs look unchanged, but the
    // angled thumb LEDs otherwise lean in the opposite direction.
    // C5149201 / PCBWay drawing: 1=GND, 2=DIN, 3=VDD, 4=DOUT.
    // Rotate the vendor footprint so the original Corne copper locations are
    // retained after translating its older LED pin numbering below.
    pcbRotation = -pcbRotation + 180
  } else if (["U1", "Y1", "D1"].includes(reference)) {
    pcbRotation += 180
  } else if (["U3", "U4"].includes(reference)) {
    pcbRotation -= 90
  }

  // A 0.25 mm shift opens the bottom GND connection beside C5.
  if (component.name === "rC5") pcbX -= 0.25

  return { pcbX, pcbY, pcbRotation: normalizeRotation(pcbRotation) }
}

const expandJlcSelector = (selector: string) => {
  const match = selector.match(/^\.([A-Za-z0-9_]+) > \.([A-Za-z0-9_]+)$/)
  if (!match) return [selector]

  const [, componentName, portName] = match
  const reference = getUnprefixedReference(componentName)
  const select = (port: string) => `.${componentName} > .${port}`

  if (/^EXSW\d+$/.test(reference)) {
    const encoder = `.${componentName}_ENCODER_PADS > .${portName}`
    if (portName === "S1") return [encoder, select("pin2")]
    if (portName === "S2") return [encoder, select("pin1")]
    return [encoder]
  }

  if (reference === "J1" && portName === "S1") {
    return ["EH1", "EH2", "EH3", "EH4"].map(select)
  }

  if (reference === "J2") {
    if (portName === "R") return ["pin2", "pin6"].map(select)
    if (portName === "S") return ["pin1", "pin4"].map(select)
    if (portName === "T") return ["pin3", "pin5"].map(select)
  }

  if (/^(?:EX)?LED\d+$/.test(reference)) {
    const vendorPin = { pin1: "pin3", pin2: "pin4", pin3: "pin1", pin4: "pin2" }[portName as "pin1" | "pin2" | "pin3" | "pin4"]
    if (vendorPin) return [select(vendorPin)]
  }

  if (reference === "U2" && portName === "pin2") {
    return ["pin2", "pin4"].map(select)
  }

  return [selector]
}

const renderFootprintElement = (element: LayoutElement, index: number) => {
  const key = `${element.type}-${index}`

  switch (element.type) {
    case "pcb_smtpad": {
      const commonProps = {
        shape: element.shape,
        layer: element.layer,
        portHints: element.port_hints,
        width: element.width,
        height: element.height,
        radius: element.radius,
        ccwRotation: element.ccw_rotation,
        cornerRadius: element.corner_radius,
      } as any

      if (element.shape === "polygon") {
        return (
          <Fragment key={key}>
            <smtpad {...commonProps} points={element.points} />
          </Fragment>
        )
      }
      return (
        <Fragment key={key}>
          <smtpad {...commonProps} pcbX={element.x} pcbY={element.y} />
        </Fragment>
      )
    }
    case "pcb_plated_hole": {
      const shape =
        element.shape === "rotated_pill_hole_with_rect_pad"
          ? "pill_hole_with_rect_pad"
          : element.shape
      return (
        <Fragment key={key}>
          <platedhole
            shape={shape as any}
            pcbX={element.x}
            pcbY={element.y}
            pcbRotation={
              element.hole_ccw_rotation ??
              element.rect_ccw_rotation ??
              element.ccw_rotation
            }
            holeDiameter={element.hole_diameter}
            outerDiameter={element.outer_diameter}
            holeWidth={element.hole_width}
            holeHeight={element.hole_height}
            outerWidth={element.outer_width}
            outerHeight={element.outer_height}
            rectPadWidth={element.rect_pad_width}
            rectPadHeight={element.rect_pad_height}
            holeOffsetX={element.hole_offset_x}
            holeOffsetY={element.hole_offset_y}
            portHints={element.port_hints}
          />
        </Fragment>
      )
    }
    case "pcb_hole":
      return (
        <Fragment key={key}>
          <hole
            shape={element.hole_shape as any}
            diameter={element.hole_diameter}
            width={element.hole_width}
            height={element.hole_height}
            pcbRotation={element.ccw_rotation}
            pcbX={element.x}
            pcbY={element.y}
          />
        </Fragment>
      )
    case "pcb_silkscreen_path":
      return (
        <Fragment key={key}>
          <silkscreenpath
            route={element.route}
            layer={element.layer}
            strokeWidth={element.stroke_width}
          />
        </Fragment>
      )
    case "pcb_silkscreen_text":
      return (
        <Fragment key={key}>
          <silkscreentext
            text={element.text}
            layer={element.layer}
            font={element.font}
            fontSize={element.font_size}
            anchorAlignment={element.anchor_alignment}
            pcbX={element.anchor_position?.x}
            pcbY={element.anchor_position?.y}
            pcbRotation={element.ccw_rotation}
          />
        </Fragment>
      )
    case "pcb_fabrication_note_path":
      return (
        <Fragment key={key}>
          <fabricationnotepath
            route={element.route}
            layer={element.layer}
            strokeWidth={element.stroke_width}
          />
        </Fragment>
      )
    case "pcb_fabrication_note_text":
      return (
        <Fragment key={key}>
          <fabricationnotetext
            text={element.text}
            layer={element.layer}
            font={element.font}
            fontSize={element.font_size}
            anchorAlignment={element.anchor_alignment}
            pcbX={element.anchor_position?.x}
            pcbY={element.anchor_position?.y}
            pcbRotation={element.ccw_rotation}
          />
        </Fragment>
      )
    case "pcb_courtyard_outline":
      return (
        <Fragment key={key}>
          <courtyardoutline
            outline={element.outline}
            layer={element.layer}
          />
        </Fragment>
      )
    default:
      return null
  }
}

const renderComponent = (component: ComponentSpec): React.ReactNode => {
  const reference = getUnprefixedReference(component.name)
  if (/^SW\d+$/.test(reference)) {
    return (
      <ChocKey
        key={component.name}
        name={component.name}
        pcbX={component.pcbX}
        pcbY={component.pcbY}
        pcbRotation={normalizeRotation(-(component.pcbRotation ?? 0))}
      />
    )
  }

  if (/^EXSW\d+$/.test(reference)) {
    // The original footprint supports a Choc socket OR an EC12 encoder.
    // Assemble the exact C5333465 socket. Keep the alternative encoder pads
    // as unpopulated PCB features, with no misleading socket part identity.
    const encoderPads = {
      ...component,
      name: `${component.name}_ENCODER_PADS`,
      doNotPlace: true,
      footprint: component.footprint.filter((e) =>
        e.type !== "pcb_smtpad" &&
        !(e.type === "pcb_hole" && Math.abs(e.hole_diameter - 3) < 0.001) &&
        e.type !== "pcb_courtyard_outline"
      ),
    }
    return (
      <Fragment key={component.name}>
        {renderComponent(encoderPads)}
        <CPG135001S30
          name={component.name}
          pcbX={component.pcbX - 2.5}
          pcbY={component.pcbY - 4.8}
          pcbRotation={0}
          layer="bottom"
          allowOffBoard
          obstructsWithinBounds={false}
        />
      </Fragment>
    )
  }

  const JlcComponent = getJlcComponent(component)
  if (JlcComponent) {
    const placement = getJlcPlacement(component)
    const ImportedComponent = JlcComponent as any
    return (
      <ImportedComponent
        key={component.name}
        name={component.name}
        {...placement}
        layer={component.layer}
        doNotPlace={["J3", "J4"].includes(reference)}
        allowOffBoard
        obstructsWithinBounds={false}
      >
        {reference === "J2" && (
          <>
            <tracehint
              for="port.pin2"
              offsets={[
                { x: 4.57, y: 3.85 },
                { x: 4.57, y: -3.85 },
              ]}
            />
            <tracehint
              for="port.pin3"
              offsets={[
                { x: 4.57, y: 3.8 },
                { x: 4.57, y: -3.8 },
              ]}
            />
          </>
        )}
      </ImportedComponent>
    )
  }

  const footprint = (
    <footprint originalLayer={component.layer}>
      {component.footprint.map(renderFootprintElement)}
    </footprint>
  )
  const commonProps = {
    name: component.name,
    pcbX: component.pcbX,
    pcbY: component.pcbY,
    pcbRotation: component.pcbRotation,
    layer: component.layer,
    footprint,
    doNotPlace: component.doNotPlace || reference === "JP1" || reference.startsWith("LOGO_"),
    supplierPartNumbers: component.supplierPartNumbers,
    manufacturerPartNumber: component.manufacturerPartNumber,
    allowOffBoard: true,
    obstructsWithinBounds: false,
  } as any

  switch (component.kind) {
    case "switch":
      return (
        <switch
          key={component.name}
          {...commonProps}
          pinLabels={component.pinLabels}
        />
      )
    case "resistor":
      return (
        <resistor
          key={component.name}
          {...commonProps}
          resistance={component.resistance ?? "0ohm"}
        />
      )
    case "capacitor":
      return (
        <capacitor
          key={component.name}
          {...commonProps}
          capacitance={component.capacitance ?? "0pF"}
        />
      )
    default:
      return (
        <chip
          key={component.name}
          {...commonProps}
          pinLabels={component.pinLabels}
          noSchematicRepresentation={
            Object.keys(component.pinLabels).length === 0
          }
        />
      )
  }
}

/**
 * Native, autoroutable Corne Chocolate v4.1 half.
 *
 * KiCad contributes component footprints, placements, net connectivity, and
 * the finished Edge.Cuts outline. No KiCad copper trace, via, or zone is used.
 */
const MAIN_MATRIX_BOTTOM_EDGE_Y = -18.608518
const MAIN_MATRIX_SIDE_CORNER_Y = -17.608518
const EDGE_CLEARANCE_EXTENSION_MM = 0.4
const CONTROLLER_NOTCH_INNER_EDGE_X = 54.170004
// Retain the original full-depth TRRS recess. Moving this edge inward by
// 1.5 mm shortened the opening and blocked the PJ-399B-6A body.
const CONTROLLER_NOTCH_CLEARANCE_EXTENSION_MM = 0

export const CorneHalf = ({ side }: { side: CorneSide }) => {
  const layout = (side === "left"
    ? corneChocolateLeft
    : corneChocolateRight) as CorneLayout
  const outline = layout.outline.map((point) => {
    const adjustedPoint =
      Math.abs(point.y - MAIN_MATRIX_BOTTOM_EDGE_Y) < 0.000001 ||
      Math.abs(point.y - MAIN_MATRIX_SIDE_CORNER_Y) < 0.000001
        ? { ...point, y: point.y - EDGE_CLEARANCE_EXTENSION_MM }
        : point

    return Math.abs(Math.abs(point.x) - CONTROLLER_NOTCH_INNER_EDGE_X) <
      0.000001
      ? {
          ...adjustedPoint,
          x:
            point.x +
            Math.sign(point.x) * CONTROLLER_NOTCH_CLEARANCE_EXTENSION_MM,
        }
      : adjustedPoint
  })

  return (
    <board
      schematicDisabled
      name={`CORNE_CHOCOLATE_V4_1_${side.toUpperCase()}`}
      outline={outline}
      thickness={1.6}
      minViaHoleDiameter={0.2}
      minViaPadDiameter={0.45}
      minTraceToHoleEdgeClearance={0.21}
      // Saved hole-clearance routes target 0.21 mm from trace to NPTH edge.
      // Reroute and rerun fabrication validation after changing geometry.
      autorouter={{
        algorithmFn: side === "left" ? reviewedLeftAutorouter : reviewedRightAutorouter,
        allowViaInPad: true,
      }}
      autorouterEffortLevel="1x"
      isViaInPadAllowed
    >
      <net name="GND" routingPhaseIndex={0} isGroundNet />
      <keepout
        shape="rect"
        pcbX={side === "right" ? 16.25 : -16.25}
        pcbY={-18.758518}
        width={14.5}
        height={0.5}
        layers={["top", "bottom"]}
      />
      {layout.components.map(renderComponent)}
      {layout.boardHoles.map((holeSpec, index) => (
        <Fragment key={`board-hole-${holeSpec.name ?? index}`}>
          <hole
            name={holeSpec.name}
            shape={holeSpec.shape}
            diameter={holeSpec.diameter}
            width={holeSpec.width}
            height={holeSpec.height}
            pcbRotation={holeSpec.pcbRotation}
            pcbX={holeSpec.pcbX}
            pcbY={holeSpec.pcbY}
          />
        </Fragment>
      ))}
      {layout.connections.flatMap((connection, connectionIndex) => {
        const selectors = connection.selectors.flatMap(expandJlcSelector)
        const j2Prefix = side === "right" ? ".rJ2" : ".J2"
        const j2BridgePair = [
          ["pin2", "pin6"],
          ["pin3", "pin5"],
        ]
          .map(([startPin, endPin]) => [
            `${j2Prefix} > .${startPin}`,
            `${j2Prefix} > .${endPin}`,
          ])
          .find(([startSelector, endSelector]) =>
            selectors.includes(startSelector) && selectors.includes(endSelector),
          )

        if (j2BridgePair) {
          const [startSelector, endSelector] = j2BridgePair
          const remainingSelectors = selectors.filter(
            (selector) => !j2BridgePair.includes(selector),
          )

          return [
            <Fragment key={`j2-bridge-${connectionIndex}`}>
              <trace
                routingPhaseIndex={0}
                from={startSelector}
                to={endSelector}
                thickness={connection.thickness ?? 0.15}
              />
            </Fragment>,
            <Fragment key={`j2-signal-${connectionIndex}`}>
              <trace
                routingPhaseIndex={0}
                path={[...remainingSelectors, endSelector]}
                thickness={connection.thickness ?? 0.15}
              />
            </Fragment>,
          ]
        }

        return getCanonicalNetName(connection.name) === "GND"
          ? selectors.map((selector, selectorIndex) => (
              <Fragment key={`ground-${connectionIndex}-${selectorIndex}`}>
                <trace
                  routingPhaseIndex={0}
                  from={selector}
                  to="net.GND"
                  thickness={connection.thickness ?? 0.15}
                />
              </Fragment>
            ))
          : oscillatorNetNames.has(getCanonicalNetName(connection.name))
            ? selectors.slice(1).map((selector, selectorIndex) => (
                <Fragment
                  key={`oscillator-${connectionIndex}-${selectorIndex}`}
                >
                  <trace
                    routingPhaseIndex={0}
                    from={selectors[0]}
                    to={selector}
                    thickness={connection.thickness ?? 0.15}
                  />
                </Fragment>
              ))
            : [
                <Fragment key={`signal-${connectionIndex}`}>
                  <trace
                    routingPhaseIndex={0}
                    path={selectors}
                    thickness={connection.thickness ?? 0.15}
                  />
                </Fragment>,
              ]
      })}
      <copperpour
        name="GND_PLANE"
        layer="bottom"
        connectsTo="net.GND"
        boardEdgeMargin={0.3}
        // Reserve 0.03 mm for the solver's polygon approximation of drilled holes.
        clearance={0.23}
      />
    </board>
  )
}
