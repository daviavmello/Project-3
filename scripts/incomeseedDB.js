const mongoose = require("mongoose");
const Income = require("../models/incomeModel");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mern-passport"
);



const incomeSeed  = [
{
  
    year: "2019",
    month: "Nov",
    type: "Income",
    description: "Paycheck",
    price: "1000"
}

];
  


  Income.remove({})
  .then(() => Income.collection.insertMany(incomeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });