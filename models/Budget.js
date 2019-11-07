const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  item: { type: String, required: true },
  price: String
});


module.exports = Budget = mongoose.model("Budget", BudgetSchema);