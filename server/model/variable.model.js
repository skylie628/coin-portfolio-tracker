const mongoose = require("mongoose");
const VariableSchema = mongoose.Schema({
  id: { type: Number, required: true },
  full_name: { type: String, required: true },
  type: { type: String, required: true },
  units: { type: String, required: true },
});
module.exports = mongoose.model("Variable", VariableSchema);
