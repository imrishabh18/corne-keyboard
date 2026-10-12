import { assembly } from "tscircuit"
import { CorneHalf } from "../lib/CorneHalf"
import { CorneEnclosureParts } from "./CorneEnclosureParts"
import left from "./left-pcb-mounted.json"
import right from "./right-pcb-mounted.json"

/** Thin rim with four top-entry countersunk M3 mounts through the reference PCB mounting openings. */
export function CornePcbMountedEnclosure({side,exploded=false}: {side:"left"|"right";exploded?:boolean}) {
  return <assembly.device name={`CORNE_${side.toUpperCase()}_PCB_MOUNTED_M3`}>
    <CorneHalf side={side}/>
    <CorneEnclosureParts side={side} exploded={exploded}
      geometry={side==="left"?left:right}/>
  </assembly.device>
}
