import { CorneHalf } from "./lib/CorneHalf"
import { PanelManufacturingFeatures } from "./lib/panel/PanelManufacturingFeatures"

export default () => (
  <panel
    name="CORNE_CHOCOLATE_V4_1_PANEL"
    layoutMode="grid"
    row={1}
    col={2}
    boardGap={6}
    edgePadding={7}
    // Explicit core cutout/hole primitives preserve safe tab positions on
    // this irregular outline; automatic tab-routing breaks the GND pours.
    panelizationMethod="none"
  >
    <CorneHalf side="left" />
    <CorneHalf side="right" />
    <PanelManufacturingFeatures />
  </panel>
)
