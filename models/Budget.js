const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Schema model for the Budgets, we might change the name to transaction to more properly represent
const BudgetSchema  = new Schema({
  description: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  income: {
    type: Boolean,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = Budget = mongoose.model("Budget", BudgetSchema);
