# ToDo

## General

- [ ] Add `LICENSE.md`
- [ ] Create templates for labels based on category / type
- [ ] Try [animations](http://react-component.github.io/tween-one/)
- [ ] Make use of additional linter: [tslint-react-hooks](https://www.npmjs.com/package/tslint-react-hooks) or `eslint-plugin-react-hooks`
  - [ ] Use the `exhaustive-deps` rule. It warns of incorrect dependencies

## Table

- [ ] Filter / search on table

- [ ] Item data
  - [ ] Add Item form
  - [ ] Edit Item form
- [ ] Generic data - example: House Wiring labels
- [x] List saved labels ( `LabelTable`)
  - [ ] Show image in table (of saved labels) (or `onMouseOver`)
  - [ ] button to directly add label to *Print List*

- [ ] Print List button should say "no labels in list" if there are none

### For Consideration

- [ ] Use Virtual List / Scrolling ; [see _"big data select"_ virtual scrolling && custom tag renderer](https://ant.design/components/select/#components-select-demo-big-data)
- [ ] multi-column sort.
- [ ] Nest dataIndex ["order", "date"]


## Drawing

- [x] `QREditModal` needs to be completed
  - [x] pick properties. checkbox ?
  - [x] `onCancel` should remove `LabelQR` object from `Label`
  - [x] As **SVG** ?
- [ ] Print in modal leads to endless spooling (and can't print again)
- [x] Multi-line text entry for labels
- [x] Draggable right border for resizing label
- [ ] Speed / Performance issues in `LabelDraw` modal ( see below )
  - [ ] Async GraphQL ? - do not block Konva drawing
- [x] Delete Label components with keyboard `[Delete]` ; see <https://konvajs.org/docs/events/Keyboard_Events.html>


- [ ] _maybe:_ Undo / Redo → <https://konvajs.org/docs/react/Undo-Redo.html>
  - [ ] ensure history updated on
    - [ ] move
    - [ ] transform
  - [ ] undo with normal keyboard shortcuts: `Ctrl+Z` for undo ; `Ctrl+Y` for redo

- [ ] context menu for text should allow size, decoration changes
- [x] QR Code Strangeness upon first modal render. Something to do with the dragging code.

### Performance

- [ ] try `shape.draw` (not `layer.draw`) ; [Shape Redraw](https://konvajs.org/docs/performance/Shape_Redraw.html) ; side effects? OR seperate objects with layers, only the moved redraw (prefer shape.draw ) [Layer Management](https://konvajs.org/docs/performance/Layer_Management.html)
- [ ] try disabling perfect drawing ( which just accounts for the width of the border in the overall size ) ; [Disabling Perfect Draw](https://konvajs.org/docs/performance/Disable_Perfect_Draw.html)
- [ ] there are a bunch of repeated calls, debug this
- [ ] try not putting history inside labeldraw state.


## Data

- [ ] PostgreSQL function to update `enum.item_class` and `enum.mapped_class`

- [ ] Setup _min.io_ S3 store

********************************************************************************

## Completed

- [x] ~~Left Side Menu~~ Top Menu
- [x] Save Labels
- [x] Refetch Query
- [x] Fix image upload button
- [x] Templating of label draw text
- [x] Show images / icons previews in `<Select>` for images / icons.
  - [x] In `<Select>` during dropdown
  - [x] In `<Select>` when image is selected ; most likely just need to style it to a larger size.
- [x] **FIX** printer buffer is now all zeroes
- [x] **FIX** `x` and `y` are not saved when the label constituents are serialized.
- [x] **FIX** italic output on some prints; RESULT= was a rounding error
- [x] Ensure multiple "rows" print properly.
- [x] Finish Add to Print List and Print List submenu
  - [x] Ability to add labels to PrintList
  - [x] Print List Submenu should show thumbnail
  - [x] Change the icon / color in the PrintModal once the image is added.
- [x] Remove extraneous `Print` button in `LabelDraw.tsx` (this should be in `LabelDrawModal`)
- [x] Saved Labels ; editing
- [x] Transforms , resize especially
  - [x] Save Transforms
- [x] Ability to **DELETE** components from context menu
- [x] Generalize code (not fixed to `HardwareFasteners`)
- [x] **FIX** QR Code adding _"QR code without item is currently not supported."_
- [x] fix button change in `DrawModal` when adding to Print List
- [x] improve `inventory-manager-api` `Dockerfile` to decrease build times
- [x] Ensure `printRaster` now works
- [x] Pass data from client to server/api for `printRaster`
- [x] Ensure multiple labels (Chain Printing) print properly.
- [x] Figure out how to use the last 6 pixels on 12mm tape  
      150 is supported max. 48 * 3 = 144 is all I can get currently without printing a second page;
- [x] ~~`canvasToBuffer` should also send along the number of pixels, otherwise if the last byte only has a single bit of importance, a whole extra byte is added.~~ This is not required since the printer is always going to shift `pinsLeft` to the right and any extra is truncated.
- [x] ~~`printRaster()` should set the tape width to the actual tape width~~ this is not a parameter, it is auto-done, extra is truncated
- [x] fix error on re-print label ; label not being set = failure
- [x] fix setting width in `LabelModal`
- [x] Fix wrapping on height
- [x] `<LabelComponent>` should set the text color and background color to the actual color from the `PrinterStatus` GraphQL Query
- [x] Complete `PrinterStatus` in `epson.ts` and related GraphQL query
  - [x] flesh out the ENUMs used by `epson.ts` and populate GraphQL
- [x] `item_id` is not getting saved alongside the `label`
- [x] Ensure setting label length statically will also work. (Or calculate & display in UI)
- [x] add delete to the remainder of the objects
  - [x] Text
  - [x] QR
  - [x] Image