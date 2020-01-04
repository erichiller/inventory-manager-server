# ToDo


* [x] ~~Left Side Menu~~ Top Menu
* [x] Save Labels
* [x] Refetch Query
* [x] Fix image upload button
* [x] Templating of label draw text
* [x] Show images / icons previews in `<Select>` for images / icons.
  * [x] In `<Select>` during dropdown
  * [x] In `<Select>` when image is selected ; most likely just need to style it to a larger size.
* [x] **FIX** printer buffer is now all zeroes
* [x] **FIX** `x` and `y` are not saved when the label constituents are serialized.
* [x] **FIX** italic output on some prints; RESULT= was a rounding error
* [x] Ensure multiple "rows" print properly.
* [x] Finish Add to Print List and Print List submenu
  * [x] Ability to add labels to PrintList
  * [x] Print List Submenu should show thumbnail
  * [x] Change the icon / color in the PrintModal once the image is added.
* [x] Remove extraneous `Print` button in `LabelDraw.tsx` (this should be in `LabelDrawModal`)
* [x] Saved Labels ; editing
* [x] Transforms , resize especially
  * [x] Save Transforms
* [x] Ability to **DELETE** components from context menu
* [x] Generalize code (not fixed to `HardwareFasteners`)
* [x] **FIX** QR Code adding _"QR code without item is currently not supported."_
* [x] fix button change in `DrawModal` when adding to Print List
* [x] improve `inventory-manager-api` `Dockerfile` to decrease build times


* [ ] Add `LICENSE.md`
* [ ] Create templates for labels based on category / type
* [ ] Filter / search on table
* [ ] Item data
  * [ ] Add Item form
  * [ ] Edit Item form
* [ ] Generic data - example: House Wiring labels
* [ ] `QREditModal`
  * [ ] pick properties. checkbox ?
  * [ ] `onCancel` should remove `LabelQR` object from `Label`


* [x] List saved labels ( `LabelTable`)
  * [ ] Show image in table (of saved labels) (or `onMouseOver`)
  * [ ] button to directly add label to *Print List*
* [ ] _maybe:_ Undo / Redo → <https://konvajs.org/docs/react/Undo-Redo.html>
  * [ ] ensure history updated on
    * [ ] move
    * [ ] transform


* [x] Ensure `printRaster` now works
* [x] Pass data from client to server/api for `printRaster`
* [x] Ensure multiple labels (Chain Printing) print properly.
* [x] Figure out how to use the last 6 pixels on 12mm tape  
      150 is supported max. 48 * 3 = 144 is all I can get currently without printing a second page;
* [ ] Ensure setting label length statically will also work. (Or calculate & display in UI)
* [ ] `canvasToBuffer` should also send along the number of pixels, otherwise if the last byte only has a single bit of importance, a whole extra byte is added.
* [ ] `printRaster()` should set the tape width to the actual tape width
* [ ] `<LabelComponent>` should set the text color and background color to the actual color from the `PrinterStatus` GraphQL Query
* [ ] Complete `PrinterStatus` in `epson.ts` and related GraphQL query
  * [ ] flesh out the ENUMs used by `epson.ts` and populate GraphQL