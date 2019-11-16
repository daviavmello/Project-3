import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";
import M from "materialize-css";

class Budget extends Component {
  constructor() {
    super();
    this.state = {
      expenses: [],
      income: [],
      type: "",
      description: "",
      amount: "",
      date: "",
      errors: {},
      transactions: []
    };

    this.date = React.createRef();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  //Create a method on the outside of render, and make sure to add a return to it. Then just call the method wherever we want
  componentDidMount() {
    const { user } = this.props.auth;
    this.getInfo(user.id);

    // Materialize
    var context = this;
    document.addEventListener("DOMContentLoaded", function() {
      var elemsDate = document.querySelectorAll(".datepicker");
      M.Datepicker.init(elemsDate, {
        format: "mm-dd-yyyy",
        onClose: context.handleDate
      });
    });
  }

  handleDate = () => {
    this.setState({
      date: this.date.current.value
    });
    console.log("Field: " + this.state.date);
  };

  //only does method after the on click
  onSubmit = event => {
    event.preventDefault();
    const { user } = this.props.auth;
    // console.log(user);
    // this.getInfo()
    
    let dataInput = {
      description: this.state.description,
      amount: this.state.amount,
      date: this.state.date,
      type: this.state.type
    };
    //Marking for potential future use
    console.log(dataInput)
    API.postBudget(user.id, dataInput)
      .then(data => {
        this.getInfo(user.id);
        console.log(data);
      })
      .catch(err => console.log(err));
    console.log(this.state.amount);

    // Clear and reset form input fields
    this.setState({
      expenses: [],
      income: [],
      type: "",
      description: "",
      amount: "",
      date: "",
      errors: {},
      transactions: []
    })
    let totalIncome = 0;
           let totalExpense = 0;
           for (let i = 0; i < this.state.transactions.length; i++) {
               console.log(this.state.transactions[i].type)
               if (this.state.transactions[i].type === "Income"){
               totalIncome += this.state.transactions[i].amount
               }
               if (this.state.transactions[i].type === "Expense"){
               totalExpense += this.state.transactions[i].amount
               }
           }
           let totalBudget = totalIncome - totalExpense;
           console.log(totalBudget);
           return totalBudget;
  };

  //method that shows the information from seeds file from the database
  //YOU CURRENTLY HAVE TO GO TO THE ROUTE http://localhost:3000/budget TO TEST THIS
  getInfo = id => {
    console.log("API Front"); //a console log to make sure application is properly connecting the api to the front end

    API.getBudget(id)
      .then(data => {
        console.log(data.data[0].budgetItem);
        let budgetItems = data.data[0].budgetItem;
        this.setState({
          // income: data.data.incomeData,
          // expenses: data.data.expenseData
          transactions: budgetItems
        });
      })
      .catch(err => console.log(err));
  };

  // Renders transaction in a table
  renderTransactions(item) {
    return (
      <tr key={item._id}>
        <td>{item.description}</td>
        <td>{item.amount}</td>
        <td>{item.date}</td>
        <td>{item.type}</td>
      </tr>
    );
   
  }

  

  render() {
    const { errors } = this.state;
    

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12 center" style={{ paddingLeft: "11.250px" }}>
              <h4>
                What's your monthly <b>income</b>:
              </h4>
            </div>
            ​
            <form id="form-transactions" onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.handleChange}
                  value={this.state.description}
                  error={errors.amount}
                  name="description"
                  type="text"
                  className={classnames("", { invalid: errors.name })}
                />
                <label htmlFor="name">Name of transaction</label>
                <span className="red-text">{errors.name}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.handleChange}
                  value={this.state.amount}
                  error={errors.amount}
                  name="amount"
                  type="text"
                  className={classnames("", { invalid: errors.name })}
                />
                <label htmlFor="name">Amount</label>
                <span className="red-text">{errors.name}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.handleDate}
                  ref={this.date}
                  error={errors.amount}
                  name="date"
                  type="text"
                  id="date"
                  className="datepicker"
                />
                <label htmlFor="date">Date</label>
                <span className="red-text">{errors.name}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.handleChange}
                  value={this.state.type}
                  error={errors.amount}
                  name="type"
                  type="text"
                  className={classnames("", { invalid: errors.name })}
                />
                <label htmlFor="name">Income, or Expense</label>
                <span className="red-text">{errors.name}</span>
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  className="btn btn-large waves-effect waves-light hoverable accent-3"
                  style={{
                    width: "140px",
                    borderRadius: "30px",
                    letterSpacing: "1.5px",
                    backgroundColor: "#222"
                  }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.state.transactions.map(this.renderTransactions)}</tbody>
        </table>
      </div>
    );
  }
}

Budget.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(Budget);
