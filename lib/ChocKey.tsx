import { Fragment } from "react"
import { CPG135001D02Mechanical } from "../imports/CPG135001D02/CPG135001D02"
import { CPG135001S30 } from "../imports/CPG135001S30/CPG135001S30"

type Point = { x: number; y: number }

type ChocKeyProps = {
  name: string
  pcbX: number
  pcbY: number
  pcbRotation: number
}

const rotatePoint = ({ x, y }: Point, degrees: number): Point => {
  const radians = (degrees * Math.PI) / 180
  const cosine = Math.cos(radians)
  const sine = Math.sin(radians)

  return {
    x: x * cosine - y * sine,
    y: x * sine + y * cosine,
  }
}

const addPoint = (origin: Point, offset: Point): Point => ({
  x: origin.x + offset.x,
  y: origin.y + offset.y,
})

/**
 * Kailh Choc V1 key assembly using exact JLC/LCSC parts:
 * - CPG135001S30 / C5333465 bottom-side hot-swap socket
 * - CPG135001D02 / C400230 top-side switch and mechanical geometry
 *
 * The socket owns the electrical pins. The switch body is deliberately
 * mechanical-only so its leads do not create duplicate plated electrical
 * holes where they pass through the socket's non-plated openings.
 */
export const ChocKey = ({
  name,
  pcbX,
  pcbY,
  pcbRotation,
}: ChocKeyProps) => {
  const keyCenter = { x: pcbX, y: pcbY }
  const socketCenter = addPoint(
    keyCenter,
    rotatePoint({ x: 2.5, y: 4.8 }, pcbRotation),
  )
  const switchCenter = addPoint(
    keyCenter,
    rotatePoint({ x: 0, y: 2.5249505 }, pcbRotation),
  )
  const ledAperture = addPoint(
    keyCenter,
    rotatePoint({ x: -5, y: -5.15 }, pcbRotation),
  )

  return (
    <Fragment>
      <CPG135001S30
        name={name}
        pcbX={socketCenter.x}
        pcbY={socketCenter.y}
        pcbRotation={pcbRotation}
        layer="bottom"
        allowOffBoard
        obstructsWithinBounds={false}
      />
      <CPG135001D02Mechanical
        name={`${name}_KEY`}
        doNotPlace
        pcbX={switchCenter.x}
        pcbY={switchCenter.y}
        pcbRotation={pcbRotation}
      />
      <hole
        name={`${name}_LED_APERTURE`}
        pcbX={ledAperture.x}
        pcbY={ledAperture.y}
        diameter="1.5mm"
      />
    </Fragment>
  )
}
