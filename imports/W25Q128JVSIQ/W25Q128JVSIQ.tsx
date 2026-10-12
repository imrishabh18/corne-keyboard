import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CS"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["GND"],
  pin5: ["pin5"],
  pin6: ["CLK"],
  pin7: ["pin7"],
  pin8: ["VCC"]
} as const

export const W25Q128JVSIQ = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C113767"
  ]
}}
      manufacturerPartNumber="W25Q128JVSIQ"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-3.530092mm" width="0.6299962mm" height="2.2500082mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-3.530092mm" width="0.6299962mm" height="2.2500082mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-3.530092mm" width="0.6299962mm" height="2.2500082mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-3.530092mm" width="0.6299962mm" height="2.2500082mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-1.905mm" pcbY="3.530092mm" width="0.6299962mm" height="2.2500082mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-0.635mm" pcbY="3.530092mm" width="0.6299962mm" height="2.2500082mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="0.635mm" pcbY="3.530092mm" width="0.6299962mm" height="2.2500082mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin5"]} pcbX="1.905mm" pcbY="3.530092mm" width="0.6299962mm" height="2.2500082mm" radius="0.3149981mm" shape="pill" />
<silkscreenpath route={[{"x":-2.6387044000000515,"y":-2.1763989999999467},{"x":-2.6387044000000515,"y":2.1763990000000604},{"x":2.6387044000000515,"y":2.1763990000000604},{"x":2.6387044000000515,"y":-2.1763989999999467},{"x":-2.6387044000000515,"y":-2.1763989999999467}]} />
<silkscreencircle pcbX="-1.905mm" pcbY="-1.423924mm" radius="0.150114mm" />
<silkscreencircle pcbX="-2.672334mm" pcbY="-3.530092mm" radius="0.150114mm" />
<silkscreentext text="{NAME}" pcbX="-0.0889mm" pcbY="5.3434mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.0693999999999733,"y":4.593399999999974},{"x":2.891599999999926,"y":4.593399999999974},{"x":2.891599999999926,"y":-4.745800000000031},{"x":-3.0693999999999733,"y":-4.745800000000031},{"x":-3.0693999999999733,"y":4.593399999999974}]} />
      </footprint>}
      cadModel={{
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C113767.step?uuid=4652e19b90fa4dbb8662aa4cba61a532",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: -0.000012699999956566899, z: -0.069425 },
      }}
      {...props}
    />
  )
}