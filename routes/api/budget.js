const router = require("express").Router();
// const budgetController = require("../../controllers/budgetController");
// let Income = require("../../models/incomeModel");
// let Expense = require("../../models/expenseModel");
let Budget = require("../../models/Budget");

router.route("/:id").get((req, res) => {
  console.log("API income")  //check for proper connection to api backend
  User.find({_id: req.params.id})
    .populate("budgetItem")
    .then(data => {
      res.json(data)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
//Schema is still pulling the actual data from the database. Think of the schema as the object version of the data

// /both
// /api/budget
//post method to post to the database
router.route("/:id").post((req, res) => {
  console.log("back end")
  console.log(req.params.id)

  console.log(req.body)
  // let userIncome = req.body.income;
//is income not being a property of the new seeds file causing the issue?
Budget.create(req.body)
     .then(data => {
       return User.findOneAndUpdate({ _id: req.params.id }, { $push: { budgetItem: data._id } }, { new: true });
       })
         .then(data => {
             res.json(data)
         })
         .catch(function (err) {
             res.json(err);
         });
});

// post method to post to the database
router.route("/expense").post((req, res) => {
  console.log("back end")

  console.log(req.body)
  let userIncome = req.body.income;
//is income not being a property of the new seeds file causing the issue?
  Income.create({income: userIncome})
    .then(() => res.json("Income added!"))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

// // Matches with "/api/budget"
// router.route("/api/budget")
//   .get(budgetController.findAll)
//   .post(budgetController.create);

// // Matches with "/api/budget/:id"
// router
//   .route("/:id")
//   .get(budgetController.findById)
//   .put(budgetController.update)
//   .delete(budgetController.remove);

// module.exports = router;