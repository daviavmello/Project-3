const mongoose = require("mongoose");
const Expense = require("../models/expenseModel");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mern-passport"
);



const expenseSeed  = [
{
    year: "2019",
    month: "Nov",
    type: "expense",
    description: "Rent",
    price: "1000"
}

];
  


  Expense.remove({})
  .then(() => Expense.collection.insertMany(expenseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });