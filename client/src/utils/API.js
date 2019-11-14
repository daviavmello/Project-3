import axios from "axios";

export default {
  // Gets all books
  //both helpers have get budget
  getBudgets: function() {
    return axios.get("/api/budget/");
  },
  // Gets the book with the given id
  getBudget: function(id) {
    return axios.get("/api/budget/" + id);
  },
  // Deletes the book with the given id
  deleteBudget: function(id) {
    return axios.delete("/api/budget/budget/" + id);
  },
  // Saves a book to the database
  postBudget: function(id, budgetData) {
      console.log(id)
    return axios.post("/api/budget/" + id, budgetData);
  }
};