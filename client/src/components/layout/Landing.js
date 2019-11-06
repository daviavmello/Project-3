import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="container valign-wrapper" style={{ height: "75vh" }}>
                <div className="row">
                    <div className="col s4">
                        <h3>
                            It’s time to do money.
                        </h3>
                        <p className="flow-text grey-text text-darken-1" style={{ fontSize: 18 }}>
                        When you’re on top of your money, life is good. We help you
                        effortlessly manage your finances in one place.

                        </p>
                        <br />
                        <div className="col s6">
                            <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                                width: "140px",
                                borderRadius: "30px",
                                letterSpacing: "1.5px",
                            }}>
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text" style={{
                                width: "140px",
                                borderRadius: 30,
                                borderWidth: 3,
                                borderColor: "#111111",
                                letterSpacing: "1.5px",
                                marginLeft: 10

                            }}>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;