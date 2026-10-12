import type { PushButtonProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const CPG135001D02 = (props: PushButtonProps<typeof pinLabels>) => {
  const { name = "SW1", ...restProps } = props

  return (
    <pushbutton
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C400230"
  ]
}}
      manufacturerPartNumber="CPG135001D02"
      footprint={<footprint>
        <hole pcbX="-0.000127mm" pcbY="-2.5249505mm" diameter="3.5000184mm" />
<hole pcbX="-5.499989mm" pcbY="-2.5249505mm" diameter="1.999996mm" />
<hole pcbX="5.499989mm" pcbY="-2.5249505mm" diameter="1.999996mm" />
<platedhole  portHints={["pin1"]} pcbX="-0.000127mm" pcbY="3.3749615mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="4.999863mm" pcbY="1.2751435mm" outerDiameter="1.7999964mm" holeDiameter="1.1999976mm" shape="circle" />
<silkscreenpath route={[{"x":-7.500137400000085,"y":-10.024960899999769},{"x":7.499883399999931,"y":-10.024960899999769}]} />
<silkscreenpath route={[{"x":7.499883399999931,"y":-10.024960899999769},{"x":7.499883399999931,"y":4.975059900000019}]} />
<silkscreenpath route={[{"x":-7.500137400000085,"y":-10.024960899999769},{"x":-7.500137400000085,"y":4.975059900000019}]} />
<silkscreenpath route={[{"x":-7.500137400000085,"y":4.975059900000019},{"x":7.499883399999931,"y":4.975059900000019}]} />
<silkscreentext text="{NAME}" pcbX="-0.000127mm" pcbY="5.9934495mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-7.768527000000063,"y":5.243449499999997},{"x":7.768272999999908,"y":5.243449499999997},{"x":7.768272999999908,"y":-10.29335049999986},{"x":-7.768527000000063,"y":-10.29335049999986},{"x":-7.768527000000063,"y":5.243449499999997}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C400230.obj?uuid=f59fab8b336a4dedb49f39b3a4d43305",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C400230.step?uuid=f59fab8b336a4dedb49f39b3a4d43305",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.00012700000002041634, y: 2.524975899999845, z: -3.000006 },
      }}
      {...restProps}
    />
  )
}

type MechanicalSwitchProps = {
  name: string
  pcbX: number
  pcbY: number
  pcbRotation: number
  doNotPlace?: boolean
}

/**
 * Mechanical-only form of the exact switch part for use with its separate
 * hot-swap socket. The socket owns the electrical pads, while this component
 * supplies the switch's locating holes, courtyard, BOM identity, and CAD model.
 */
export const CPG135001D02Mechanical = ({
  name,
  pcbX,
  pcbY,
  pcbRotation,
  doNotPlace,
}: MechanicalSwitchProps) => (
  <chip
    name={name}
    pcbX={pcbX}
    pcbY={pcbY}
    pcbRotation={pcbRotation}
    layer="top"
    doNotPlace={doNotPlace}
    noSchematicRepresentation
    supplierPartNumbers={{ jlcpcb: ["C400230"] }}
    manufacturerPartNumber="CPG135001D02"
    allowOffBoard
    obstructsWithinBounds={false}
    footprint={
      <footprint>
        <hole pcbX="-0.000127mm" pcbY="-2.5249505mm" diameter="3.5000184mm" />
        <hole pcbX="-5.499989mm" pcbY="-2.5249505mm" diameter="1.999996mm" />
        <hole pcbX="5.499989mm" pcbY="-2.5249505mm" diameter="1.999996mm" />
        <courtyardoutline
          outline={[
            { x: -7.768527, y: 5.2434495 },
            { x: 7.768273, y: 5.2434495 },
            { x: 7.768273, y: -10.2933505 },
            { x: -7.768527, y: -10.2933505 },
            { x: -7.768527, y: 5.2434495 },
          ]}
        />
      </footprint>
    }
    cadModel={{
      objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C400230.obj?uuid=f59fab8b336a4dedb49f39b3a4d43305",
      stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C400230.step?uuid=f59fab8b336a4dedb49f39b3a4d43305",
      pcbRotationOffset: 0,
      modelOriginPosition: {
        // The mechanical wrapper's PCB center is already the switch's main
        // locating-post center. Unlike the vendor-datum electrical footprint,
        // the OBJ therefore needs no additional XY translation.
        x: 0,
        y: 0,
        z: -3.000006,
      },
    }}
  />
)
