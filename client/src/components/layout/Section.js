import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image3 from '../assets/image3.svg';

class Section extends Component {

    render() {
        return (
            <div style={{ background: '#40C6D8', padding: "100px 0"}}>
                <div className="container row valign-wrapper" style={{ }}>
                    <div className="col s6">
                    <img src={image3} alt="Illustration" style= {{width: '400px'}}></img>
                    </div>
                    <div className="col s6">
                        <h2 style={{ paddingBottom: '40px'}}><b>Introducing Cash Management</b></h2>
                        <h4 className="flow-text text-darken-1" style={{ paddingBottom: '20px', lineHeight:"35px", color:'#111'}}>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).</h4>

                        <Link to="/budget" className="waves-effect waves-light btn btn-large hoverable btn-flat" style={{
                                letterSpacing: "1.5px",
                                borderRadius: "30px",
                                marginLeft: 10,
                                border: "2px solid #222",
                                backgroundColor:'#41C5D8',
                                color: "#222"
                            }}>
                                <b>Create Budget</b>
                        </Link>

                    </div>
                </div>
                </div>

        )
    }
}

        export default Section;