import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/" className="valign-wrapper left">
                            <img src={logo} alt="logo" style={{ width: "150px", marginLeft: "50px", marginTop: "15px"}}></img>
                        </Link>

                        <Link to="/budget" className="right waves-effect center waves-light btn-flat hoverable" style={{
                                borderRadius: "30px",
                                letterSpacing: "1.5px",
                                marginRight: "50px",
                                marginTop: "15px",
                                border: "2px solid #41C5D8",
                                color: "#41C5D8"
                            }}>
                                <b>Create Budget</b>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;