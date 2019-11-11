import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import axios from 'axios';

class Budget extends Component {
    constructor() {
        super();
        this.state = {
            transactions: [],
            income: "",
            errors: {}
        };
    }

//only does method after the on click
    onSubmit = (event) => {
        event.preventDefault()
        this.getInfo()
    }
//method that shows the information from seeds file from the database
//YOU CURRENTLY HAVE TO GO TO THE ROUTE http://localhost:3000/budget TO TEST THIS
    getInfo = () => {
        console.log("API Front");//a console log to make sure application is properly connecting the api to the front end
        
        axios.get("/api/budget")
        .then(data => {
            console.log(data)
            this.setState({transactions:data.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i> Back to home
                        </Link>
                        <div className="col s12 center" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                What's your monthly <b>income</b>:
                            </h4>
                            {this.state.transactions.map(item => (
                                <div key={item._id}>
                                <p>{item.description}</p>
                                <p>{item.amount}</p>
                                <p>{item.date}</p>
                                <p>{item.category}</p>
                                </div>


                            ))}
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.name} error={errors.name} name="name" type="text" className={classnames("", { invalid: errors.name })} />
                                <label htmlFor="name">Your current income</label>
                                <span className="red-text">{errors.name}</span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                                    width: "150px",
                                    letterSpacing: "1.5px",
                                    borderRadius: 30,
                                    borderWidth: 3,
                                    borderColor: "#111111",
                                    marginTop: "1rem"
                                }} type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default Budget;