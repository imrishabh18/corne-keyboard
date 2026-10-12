import { assembly } from "tscircuit"
import type { JscadOperation } from "jscad-planner"
import left from "./left-pcb-mounted.json"
import right from "./right-pcb-mounted.json"

interface EnclosureData {
  models: { name: string; role: string; plan: JscadOperation }[]
}

/** Printed parts in the same coordinate system as the original PCB. */
export function CorneEnclosureParts({ side, exploded = false, geometry, fastenersFromBelow = false, showKeys = true, printedPartsOnly = false }: {
  side: "left" | "right"; exploded?: boolean; geometry?: EnclosureData; fastenersFromBelow?: boolean; showKeys?: boolean; printedPartsOnly?: boolean
}) {
  const data: EnclosureData = geometry ?? (side === "left" ? left : right)
  return (
    <>
      {data.models
        .filter((model) => ["base", "plate"].includes(model.role)
          || (!printedPartsOnly && (["screws", "nuts"].includes(model.role)
            || (showKeys && ["switches", "keycaps"].includes(model.role)))))
        .map((model) => {
          const isBase = model.role === "base"
          const printed = isBase || model.role === "plate"
          const lift = exploded ? ({ base: -16, plate: 16,
            screws: fastenersFromBelow ? -28 : 27,
            nuts: fastenersFromBelow ? 16 : -24,
            switches: 32, keycaps: 40 }[model.role] ?? 0) : 0
          const plan: JscadOperation = {
            type: "translate",
            // Stored plans used a chip's top-surface anchor (+0.8 mm).
            // Assembly parts use the PCB centre plane as their origin.
            vector: [0, 0, 0.8 + lift],
            shape: {
              type: "colorize",
              color: model.role === "keycaps" ? [1, 1, 1] : [0.02, 0.02, 0.02],
              shape: model.plan,
            },
          }
          if (!printed) return <assembly.part
            key={model.name}
            name={`${side}_${model.name}`}
            displayName={`${side} ${model.role} (illustrative)`}
            cadModel={{ jscad: plan, modelUnitToMmScale: 1 }}
          />
          return (
            <assembly.printedpart
              key={model.name}
              name={`${side}_${model.name}`}
              displayName={`${side} ${model.role}`}
              material="pla"
              color="#050505"
              cadModel={{ jscad: plan, modelUnitToMmScale: 1 }}
            />
          )
        })}
    </>
  )
}
