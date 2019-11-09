const mongoose = require("mongoose");
const Budget = require("../models/Budget");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mern-passport"
);



const budgetSeed = [
    {
      salary: 3000
    },
    {
      salary: 4000
    },
    {
      salary: 5000
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