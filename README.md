# Corne RP2040 keyboard

A wired Corne Chocolate v4.1 split keyboard made with [tscircuit](https://tscircuit.com/imrishabh18/corne-keyboard), based on [foostan/crkbd](https://github.com/foostan/crkbd). Each half has 21 Choc V1 hot-swap positions, an RP2040, USB-C and a TRRS connector. The printable cases are black with white illustrative keycaps and a flat switch plate.

## Files

| File | Purpose |
| --- | --- |
| `panel-assembly.circuit.json` | Saved fabricated panel, rails and mousebites, plus four separate printable parts. This is the package preview and cloud build entrypoint. |
| `index.circuit.tsx` | Editable two-board panel source. |
| `left.circuit.tsx`, `right.circuit.tsx` | PCB and enclosure assemblies. The `*-enclosure.circuit.tsx` files provide aliases. |
| `left-printed-parts.circuit.tsx`, `right-printed-parts.circuit.tsx` | Separate `assembly.printedpart` definitions for each base and switch plate. |
| `assembly/*-pcb-mounted.json` | JSCAD plans for cases, plates and illustrative hardware. |
| `lib/`, `imports/` | Referenced PCB layouts, reviewed routes, panel features and imported component footprints. |

The JSON files referenced by the source are required. The duplicate PCB-only snapshot, older enclosure revisions, experiment outputs and generated STEP files are omitted.

## Preview and export

Install Bun and the [tscircuit CLI](https://github.com/tscircuit/cli), then run:

```sh
bun install
tsci dev
```

Open `panel-assembly.circuit.json` for the saved panel, or a left/right TSX file for its enclosure. Run `bun run build` to generate the saved panel preview.

With a CLI or website version supporting separate assembly STEP exports, choose **Assembly STEP (ZIP)** or run:

```sh
tsci export panel-assembly.circuit.json --format assembly-step
```

The ZIP contains `left_CASE_BASE.step`, `left_SWITCH_PLATE.step`, `right_CASE_BASE.step` and `right_SWITCH_PLATE.step`. Print the four parts separately at 100% scale in millimetres; place them flat on the slicer's bed. Electronics, switches and keycaps are illustrative and excluded from the printable STEP export.

## Enclosure assembly

The current case uses four **M3 × 10 mm DIN 7991 countersunk screws per half**, with heads no larger than 6 mm diameter and 1.7 mm height. Socket-cap screws require a different head recess. Screws enter from the plate, pass through 3.4 mm plate clearance holes and the existing 5 mm PCB mounting openings, then engage 2.8 mm blind pilots in the PLA base. Check printed hole fit before installing the PCB; do not force a screw into a tight bore.

The rim is 1.2 mm thick. Interior supports and plate ribs support the middle keys. The plate stays flat above USB-C and TRRS, with edge notches for cables.

## Cloud build and fabrication

Cloud builds use the bundled tscircuit runtime and build only the saved combined panel. It already contains both boards and all four printable parts, so separate part previews and large JavaScript library bundles are unnecessary for this package.

The saved PCB geometry and routing are preserved. The editable TSX source currently has framework placement/panel diagnostics and must be reviewed before generating replacement fabrication files. This package cleanup does not constitute a new fabrication sign-off.
