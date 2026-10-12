import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "OSC1"],
  pin2: ["pin2", "GND1"],
  pin3: ["pin3", "OSC2"],
  pin4: ["pin4", "GND2"]
} as const

export const Q22FA23V00418 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":-1.27,"y":-1.016},{"x":-1.27,"y":1.016}]} strokeWidth={0.254} strokeColor="#880011" />
          <schematicpath points={[{"x":0.762,"y":-1.778},{"x":-0.762,"y":-1.778}]} strokeWidth={0.254} strokeColor="#880011" />
          <schematicpath points={[{"x":1.27,"y":-1.016},{"x":1.27,"y":1.016}]} strokeWidth={0.254} strokeColor="#880011" />
          <schematicpath points={[{"x":-0.762,"y":-1.778},{"x":-0.762,"y":1.778},{"x":0.762,"y":1.778},{"x":0.762,"y":-1.778}]} strokeWidth={0.254} strokeColor="#880011" />
          <schematicpath points={[{"x":5.08,"y":2.54},{"x":2.54,"y":2.54},{"x":2.54,"y":0},{"x":1.524,"y":0}]} strokeWidth={0.254} strokeColor="#880011" />
          <schematicpath points={[{"x":-5.08,"y":-2.54},{"x":-2.54,"y":-2.54},{"x":-2.54,"y":0},{"x":-1.524,"y":0}]} strokeWidth={0.254} strokeColor="#880011" />
          <schematicpath points={[{"x":1.27,"y":-1.778},{"x":1.27,"y":1.778}]} strokeWidth={0.254} strokeColor="#880011" />
          <schematicpath points={[{"x":-1.27,"y":-1.778},{"x":-1.27,"y":1.778}]} strokeWidth={0.254} strokeColor="#880011" />
          <schematicpath points={[{"x":0.762,"y":1.778},{"x":0.762,"y":-1.778},{"x":-0.762,"y":-1.778},{"x":-0.762,"y":1.778},{"x":0.762,"y":1.778}]} strokeWidth={0.254} strokeColor="#880011" />
          <port name="pin4" pinNumber={4} aliases={["GND2"]} direction="left" schX={-7.62} schY={2.54} schStemLength={2.54} />
          <port name="pin2" pinNumber={2} aliases={["GND1"]} direction="right" schX={7.62} schY={-2.54} schStemLength={2.54} />
          <schematicrect schX={0} schY={0} width={10.16} height={10.16} strokeWidth={0.254} color="#880000" />
          <port name="pin1" pinNumber={1} aliases={["OSC1"]} direction="left" schX={-7.62} schY={-2.54} schStemLength={2.54} />
          <port name="pin3" pinNumber={3} aliases={["OSC2"]} direction="right" schX={7.62} schY={2.54} schStemLength={2.54} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C91749"
  ]
}}
      manufacturerPartNumber="Q22FA23V00418"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.100074mm" pcbY="-0.850011mm" width="1.3999972mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.100074mm" pcbY="-0.850011mm" width="1.3999972mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="1.100074mm" pcbY="0.850011mm" width="1.3999972mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.100074mm" pcbY="0.850011mm" width="1.3999972mm" height="1.1999976mm" shape="rect" />
<silkscreenpath route={[{"x":-2.028596400000083,"y":-1.6784827999999834},{"x":-2.028596400000083,"y":1.678736800000138},{"x":2.0285963999999694,"y":1.678736800000138},{"x":2.0285963999999694,"y":-1.6784827999999834},{"x":-2.028596400000083,"y":-1.6784827999999834}]} />
<silkscreenpath route={[{"x":-2.257196399999998,"y":-0.24988519999988057},{"x":-2.257196399999998,"y":-1.9070827999998983},{"x":-0.39999920000002476,"y":-1.9070827999998983}]} />
<silkscreentext text="{NAME}" pcbX="-0.1143mm" pcbY="2.676527mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.5106000000000677,"y":1.9265270000000783},{"x":2.2819999999999254,"y":1.9265270000000783},{"x":2.2819999999999254,"y":-2.1548729999999523},{"x":-2.5106000000000677,"y":-2.1548729999999523},{"x":-2.5106000000000677,"y":1.9265270000000783}]} />
      </footprint>}
      cadModel={{
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C91749.step?uuid=02485e56ba8d4732a26526d2983fc729",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: -0.000012700000070253736, z: 0 },
      }}
      {...props}
    />
  )
}
