const router = require("express").Router();
// const budgetController = require("../../controllers/budgetController");
let Budget = require("../../models/Budget");

router.route("/").get((req, res) => { 
  budgetSchema.find()
    .then(budgetSchema => res.json(budgetSchema))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/add").post((req, res) => {
  console.log("back end")

  console.log(req.body)
  let userBudget = req.body.salary;

  Budget.create({salary: userBudget})
    .then(() => res.json("Salary added!"))
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

module.exports = router;
