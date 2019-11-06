import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/" className="col s5 brand-logo center black-text" style={{ fontFamily: "monospace", fontSize: 2 , }}>
                            <h4>Specs Finance</h4>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;