const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BudgetSchema  = new Schema({
    description: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
    });

module.exports = Budget = mongoose.model("Budget", BudgetSchema);
    