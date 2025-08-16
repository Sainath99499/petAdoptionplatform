const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String },
  adopted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Pet", PetSchema);
