import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
// import incomeAPI from "../../utils/incomeAPI";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";

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
  }
  //only does method after the on click
  onSubmit = event => {
    event.preventDefault();
    const { user } = this.props.auth;
    console.log(user);
    // this.getInfo()
    let dataInput = {
      description: this.state.description,
      amount: this.state.amount,
      date: this.state.date,
      type: this.state.type
    };
    API.postBudget(user.id, dataInput)
      .then(data => {
        this.getInfo(user.id);
        console.log(data);
      })
      .catch(err => console.log(err));
    console.log(this.state.amount);
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

  // filter over user expenses array based on type and then map over

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
            <form onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.handleChange}
                  value={this.state.description}
                  error={errors.amount}
                  name="description"
                  type="text"
                  className={classnames("", { invalid: errors.name })}
                />
                <label htmlFor="name">Your current income</label>
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
                <label htmlFor="name">Transaction</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.handleChange}
                  value={this.state.date}
                  error={errors.amount}
                  name="date"
                  type="text"
                  className={classnames("", { invalid: errors.name })}
                />
                <label htmlFor="name">Date</label>
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
                <label htmlFor="name">Income or Expense </label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  style={{
                    width: "150px",
                    letterSpacing: "1.5px",
                    borderRadius: 30,
                    borderWidth: 3,
                    borderColor: "#111111",
                    marginTop: "1rem"
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
          <thead className="thead-dark">
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
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