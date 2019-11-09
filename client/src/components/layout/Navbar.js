import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/" className="brand-logo black-text" style={{ fontFamily: "monospace" }}>
                            <h5>Specs Finance</h5>
                        </Link>

                        <Link to="/budget" className="right hide-on-med-and-down black-text" style={{ fontFamily: "Helvetica", fontSize: 20, }}>
                            <p>Create Budget</p>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;