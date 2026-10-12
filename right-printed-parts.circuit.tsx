import { assembly } from "tscircuit"
import { CorneEnclosureParts } from "./assembly/CorneEnclosureParts"

export default () => (
  <assembly.device name="CORNE_RIGHT_PRINTED_PARTS">
    <CorneEnclosureParts side="right" printedPartsOnly />
  </assembly.device>
)
