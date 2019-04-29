// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Label = Label || {};

/**
 * @constructor
 */
Label.Label = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Label.Label}
 */
Label.Label.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Label.Label=} obj
 * @returns {Label.Label}
 */
Label.Label.getRootAsLabel = function(bb, obj) {
  return (obj || new Label.Label).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
Label.Label.prototype.name = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Label.Label.prototype.inventory = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Label.Label.prototype.inventoryLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Label.Label.prototype.inventoryArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Label.Label.startLabel = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
Label.Label.addName = function(builder, nameOffset) {
  builder.addFieldOffset(0, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} inventoryOffset
 */
Label.Label.addInventory = function(builder, inventoryOffset) {
  builder.addFieldOffset(1, inventoryOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Label.Label.createInventoryVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Label.Label.startInventoryVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Label.Label.endLabel = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Label.Label.finishLabelBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 * @param {flatbuffers.Offset} inventoryOffset
 * @returns {flatbuffers.Offset}
 */
Label.Label.createLabel = function(builder, nameOffset, inventoryOffset) {
  Label.Label.startLabel(builder);
  Label.Label.addName(builder, nameOffset);
  Label.Label.addInventory(builder, inventoryOffset);
  return Label.Label.endLabel(builder);
}

// Exports for Node.js and RequireJS
this.Label = Label;
