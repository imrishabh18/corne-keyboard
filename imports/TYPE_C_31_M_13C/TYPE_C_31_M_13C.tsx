import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin17: ["EH3"],
  pin18: ["EH2"],
  pin19: ["EH1"],
  pin20: ["EH4"],
  pin21: ["A1"],
  pin22: ["B12"],
  pin23: ["A4"],
  pin24: ["B9"],
  pin25: ["B8"],
  pin26: ["A5"],
  pin27: ["B7"],
  pin28: ["A6"],
  pin29: ["A7"],
  pin30: ["B6"],
  pin31: ["A8"],
  pin32: ["B5"],
  pin33: ["B4"],
  pin34: ["A9"],
  pin35: ["B1"],
  pin36: ["A12"]
} as const

export const TYPE_C_31_M_13C = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2848620"
  ]
}}
      manufacturerPartNumber="TYPE_C_31_M_13C"
      footprint={<footprint>
        <platedhole  portHints={["pin19"]} pcbX="-5.620004mm" pcbY="-2.8749434mm" holeWidth="0.7999984mm" holeHeight="1.999996mm" outerWidth="1.1999976mm" outerHeight="2.3999952mm" shape="pill" />
<platedhole  portHints={["pin18"]} pcbX="5.620004mm" pcbY="-2.8749434mm" holeWidth="0.7999984mm" holeHeight="1.999996mm" outerWidth="1.1999976mm" outerHeight="2.3999952mm" shape="pill" />
<platedhole  portHints={["pin17"]} pcbX="5.620004mm" pcbY="1.1250486mm" holeWidth="0.7999984mm" holeHeight="1.5999968mm" outerWidth="1.1999976mm" outerHeight="1.999996mm" shape="pill" />
<platedhole  portHints={["pin20"]} pcbX="-5.620004mm" pcbY="1.1250486mm" holeWidth="0.7999984mm" holeHeight="1.5999968mm" outerWidth="1.1999976mm" outerHeight="1.999996mm" shape="pill" />
<smtpad portHints={["pin21"]} pcbX="-3.350006mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-3.050032mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-2.549906mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-2.249932mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-1.75006mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-1.249934mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-0.750062mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-0.249936mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="0.249936mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="0.750062mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="1.24968mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin32"]} pcbX="1.75006mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin33"]} pcbX="2.249932mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin34"]} pcbX="2.55016mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin35"]} pcbX="3.050032mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<smtpad portHints={["pin36"]} pcbX="3.350006mm" pcbY="2.3249446mm" width="0.2999994mm" height="1.1999976mm" shape="rect" />
<silkscreenpath route={[{"x":4.470399999999927,"y":-4.973999400000025},{"x":4.470399999999927,"y":1.4445805999999948},{"x":-4.470400000000041,"y":1.4445805999999948},{"x":-4.470400000000041,"y":-4.973999400000025},{"x":4.460239999999885,"y":-4.973999400000025},{"x":4.460239999999885,"y":-4.973999400000025}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.9355606mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-6.472999999999956,"y":3.185560599999917},{"x":6.472999999999956,"y":3.185560599999917},{"x":6.472999999999956,"y":-5.213839400000097},{"x":-6.472999999999956,"y":-5.213839400000097},{"x":-6.472999999999956,"y":3.185560599999917}]} />
      </footprint>}
      cadModel={{
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2848620.step?uuid=f113970034d94c1c90bd3d50b5fc9d96",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: -2.874946399999999, z: 1.5499972 },
      }}
      {...props}
    />
  )
}