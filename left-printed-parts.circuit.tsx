import { assembly } from "tscircuit"
import { CorneEnclosureParts } from "./assembly/CorneEnclosureParts"

export default () => (
  <assembly.device name="CORNE_LEFT_PRINTED_PARTS">
    <CorneEnclosureParts side="left" printedPartsOnly />
  </assembly.device>
)
