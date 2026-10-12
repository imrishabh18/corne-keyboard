import type { DiodeProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["cathode","neg"],
  pin2: ["anode","pos"]
} as const

export const A_1N4148WT = (props: DiodeProps) => {
  const { name = "D1", ...restProps } = props

  return (
    <diode
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C232841"
  ]
}}
      manufacturerPartNumber="A_1N4148WT"
      footprint={<footprint>
        <smtpad portHints={["pin2","anode","pos"]} pcbX="0.649986mm" pcbY="0mm" width="0.5999988mm" height="0.3599942mm" shape="rect" />
<smtpad portHints={["pin1","cathode","neg"]} pcbX="-0.649986mm" pcbY="0mm" width="0.5999988mm" height="0.3599942mm" shape="rect" />
<silkscreenpath route={[{"x":-0.9139936000000262,"y":-0.3630167999999685},{"x":-0.9139936000000262,"y":-0.4758689999999888},{"x":-0.6757670000000644,"y":-0.4758689999999888}]} />
<silkscreenpath route={[{"x":-0.6761734000000388,"y":0.4761991999999964},{"x":-0.9144000000000005,"y":0.4761991999999964},{"x":-0.9144000000000005,"y":0.35559999999998126}]} />
<silkscreenpath route={[{"x":-0.6761734000000388,"y":0.4761991999999964},{"x":0.6761733999999251,"y":0.4761991999999964}]} />
<silkscreenpath route={[{"x":-0.6761734000000388,"y":-0.4761991999998827},{"x":0.6761733999999251,"y":-0.4761991999998827}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="1.5588mm" anchorAlignment="center" fontSize="1mm" />
<fabricationnotepath route={[{"x":-0.8870187999999644,"y":0.05501640000011321},{"x":-0.8870187999999644,"y":-0.04099559999997382},{"x":-0.5029961999999841,"y":-0.04099559999997382},{"x":-0.5029961999999841,"y":0.05501640000011321},{"x":-0.8870187999999644,"y":0.05501640000011321}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":0.8800337999998646,"y":0.04800599999998667},{"x":0.8800337999998646,"y":-0.04800599999998667},{"x":0.4960111999998844,"y":-0.04800599999998667},{"x":0.4960111999998844,"y":0.04800599999998667},{"x":0.8800337999998646,"y":0.04800599999998667}]} strokeWidth="0.254mm" />
<fabricationnotepath route={[{"x":0.7360157999999046,"y":0.3199892000000091},{"x":0.7360157999999046,"y":-0.3199891999998954},{"x":0.6400292000000718,"y":-0.3199891999998954},{"x":0.6400292000000718,"y":0.3199892000000091},{"x":0.7360157999999046,"y":0.3199892000000091}]} strokeWidth="0.254mm" />
<courtyardoutline outline={[{"x":-1.1897999999998774,"y":0.8088000000000193},{"x":1.2152000000000953,"y":0.8088000000000193},{"x":1.2152000000000953,"y":-0.7834000000000287},{"x":-1.1897999999998774,"y":-0.7834000000000287},{"x":-1.1897999999998774,"y":0.8088000000000193}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C232841.obj?uuid=1b4f85e18594402ead7ab158b0198846",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C232841.step?uuid=1b4f85e18594402ead7ab158b0198846",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -0.21323999999999999, y: -0.010918999999999984, z: -0.71 },
      }}
      {...restProps}
    />
  )
}