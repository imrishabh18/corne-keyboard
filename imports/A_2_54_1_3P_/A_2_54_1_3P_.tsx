import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"]
} as const

export const A_2_54_1_3P_ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C49257"
  ]
}}
      manufacturerPartNumber="2.54-1*3P针"
      footprint={<footprint>
        <platedhole  portHints={["pin3"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="1.5999968mm" holeDiameter="1.1000232mm" shape="circle" />
<silkscreenpath route={[{"x":-1.9049999999999727,"y":1.2699999999999818},{"x":-3.8100000000000023,"y":1.2699999999999818},{"x":-3.8100000000000023,"y":-1.2700000000000102},{"x":3.8100000000000023,"y":-1.2700000000000102},{"x":3.8100000000000023,"y":1.2699999999999818}]} />
<silkscreenpath route={[{"x":3.8100000000000023,"y":1.2699999999999818},{"x":-1.9049999999999727,"y":1.2699999999999818}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.085399999999936,"y":1.5199999999999818},{"x":4.060000000000002,"y":1.5199999999999818},{"x":4.060000000000002,"y":-1.5200000000000102},{"x":-4.085399999999936,"y":-1.5200000000000102},{"x":-4.085399999999936,"y":1.5199999999999818}]} />
      </footprint>}
      cadModel={{
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C49257.step?uuid=c023159e66794c6e8fc0907055f01d55",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -2.54, y: 0, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}