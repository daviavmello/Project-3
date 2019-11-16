import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../assets/Image.png";
import Section from "./Section";
import Footer from "./Footer";

class Landing extends Component {
  render() {
    return (
      <div>
          <div className="background"
          style={{
            backgroundColor: "#f5f5f5",
            paddingTop: "50px",
            paddingBottom: "50px"
          }}
          >
        <div className="container row valign-wrapper">
          <div className="col s4">
            <h1 style={{ color: '#222'}}>
              <b>It’s time to do money.</b>
            </h1>
            <h3 className="flow-text black-text text-darken-1" style={{lineHeight:"35px"}}>
              When you’re on top of your money, life is good. We help you
              effortlessly manage your finances in one place.
            </h3>
            <br />
            <div className="col">
              <Link
                to="/register"
                className="btn btn-large waves-effect waves-light hoverable accent-3"
                style={{
                  borderRadius: "30px",
                  letterSpacing: "1.5px",
                  backgroundColor: "#276DB9"
                }}
              >
                Register
                
              </Link>
            <Link
              to="/login"
              className="btn btn-large black-text btn-flat "
              style={{
                letterSpacing: "1.5px",
                borderRadius: "30px",
                marginLeft: 10,
                border: "2px solid #222",
                backgroundColor:'#f5f5f5',
                color: "#222"
              }}
            >
              Login
            </Link>
            </div>
          </div>
          <div className="col s8 right-align">
            <img
              src={image}
              alt="Illustration"
              style={{ width: "400px", marginLeft: "100px" }}
            ></img>
          </div>
        
        </div>
        </div>
        <Section></Section>
        <Footer></Footer>
      </div>
      
    );
  }
}

export default Landing;
