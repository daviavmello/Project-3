import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Budget extends Component {
    constructor() {
        super();
        this.state = {
            salary: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const budget = {
            salary: this.state.salary
        };

        // console.log(budget);
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
                                What's your monthly <b>salary</b>:
                            </h4>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.salary} error={errors.name} name="name" type="text" className={classnames("", { invalid: errors.name })} />
                                <label htmlFor="name">Your current salary</label>
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