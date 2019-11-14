const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//subject to change depending on when we have users enter information instead of using seedsDB
const incomeSchema = new Schema({
    
    amount: Number,
    year: String,
    month: String,
    type: String,
    description: String,
    price: String
});



// const Incomes = mongoose.model('Incomes', incomeSchema);

// module.exports = Incomes;

const Incomes = mongoose.model('Incomes', incomeSchema);

module.exports = Incomes;