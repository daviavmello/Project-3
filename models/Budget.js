const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  item: { type: String, required: true },
  synopsis: String
});


module.exports = Budget = mongoose.model("Budget", BudgetSchema);