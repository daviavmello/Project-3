const mongoose = require("mongoose");
const db = require("../models/Budget");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mern-passport"
);



const budgetSeed = [
    {
      item: "Apple",
      price:
        "7.00"
    },
    {
      item: "Shirt",
      price:
      "10.00"
    }
];


  db.remove({})
  .then(() => db.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });