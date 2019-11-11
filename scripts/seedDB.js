const mongoose = require("mongoose");
const Budget = require("../models/Budget");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mern-passport"
);



const budgetSeed  = [
{
  description: "Paycheck",
  amount : 1000,
  date:"11/09/2019",
  income: true,
  category: "income"
},
{
  description: "Gas",
  amount : 30,
  date:"11/11/2019",
  income: false,
  category: "expense"
},
{
  description: "Groceries",
  amount : 200,
  date:"11/12/2019",
  income: false,
  category: "food"
}

];
  


  Budget.remove({})
  .then(() => Budget.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });