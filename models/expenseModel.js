const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//subject to change depending on when we have users enter information instead of using seedsDB
const expenseSchema = new Schema({
    
    year: String,
    month: String,
    type: String,
    description: String,
    price: String
});

const Expenses = mongoose.model('Expenses', expenseSchema);

module.exports = Expenses;