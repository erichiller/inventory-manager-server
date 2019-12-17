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


* [ ] Add `LICENSE.md`
* [ ] Create templates for labels based on category / type
* [ ] Filter / search on table
* [ ] Generalize code (not fixed to `HardwareFasteners`)
* [ ] Item data
  * [ ] Add Item form
  * [ ] Edit Item form
* [ ] Generic data - example: House Wiring labels


* [ ] **FIX** QR Code adding _"QR code without item is currently not supported."_
* [x] List saved labels
  * [ ] Show image in table (of saved labels) (or `onMouseOver`)
  * [ ] button to directly add label to *Print List*
* [x] Ensure multiple labels (Chain Printing) print properly.
* [ ] Ensure setting label length statically will also work. (Or calculate & display in UI)
* [ ] _maybe:_ Undo / Redo → <https://konvajs.org/docs/react/Undo-Redo.html>
  * [ ] ensure history updated on
    * [ ] move
    * [ ] transform
* [ ] fix button change in `DrawModal` when adding to Print List
* [ ] Figure out how to use the last 6 pixels on 12mm tape  
      150 is supported max. 48 * 3 = 144 is all I can get currently without printing a second page;