const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  salary: { type: Number, required: true },
  // salary: String
}, {
  timestamps: true,
});


module.exports = Budget = mongoose.model("Budget", BudgetSchema);