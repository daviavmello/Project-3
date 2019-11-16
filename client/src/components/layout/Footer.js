import React, { Component } from "react";
// import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer center" style={{ paddingTop: '30px', paddingBottom: '30px', background:'#111'}}>
          <a
            href="https://github.com/davimello/Surplus-App"
            className="fa fa-github"
            target="_blank" style={{ color: '#41C5D8', width: '75px', textDecoration:'none', transform: 'scale(2)'}}
          > </a>
          <a
            href="https://dribbble.com/davicreative"
            className="fa fa-dribbble"
            target="_blank" style={{ color: '#41C5D8', width: '75px', textDecoration:'none', transform: 'scale(2)'}}
          > </a>
          <a
            href="https://www.linkedin.com/in/daviavmello/"
            className="fa fa-linkedin"
            target="_blank" style={{ color: '#41C5D8', width: '75px', textDecoration:'none', transform: 'scale(2)'}}
          > </a>
          <p style={{ color: '#fff', paddingTop:'20px' }}>&#169; 2019 Surplus. All Rights Reserved.</p>
          </div>
    );
  }
}

export default Footer;
