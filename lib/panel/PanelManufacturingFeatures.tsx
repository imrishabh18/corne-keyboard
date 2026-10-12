import features from "./manufacturing-features.json"
import { Fragment } from "react"

/** Panel-owned geometry, rendered by core in both CLI and browser builds. */
export const PanelManufacturingFeatures = () => (
  <>
    {features.cutouts.map((points, i) => (
      <Fragment key={`panel-route-${i}`}>
        <cutout shape="polygon" points={points} />
      </Fragment>
    ))}
    {features.holes.map((hole, i) => (
      <Fragment key={`panel-hole-${i}`}>
        <hole pcbX={hole.x} pcbY={hole.y} diameter={hole.diameter} />
      </Fragment>
    ))}
  </>
)
