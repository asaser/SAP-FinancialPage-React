import React from 'react';
import './Header.css';

// import HeaderPicture from '../assets/img/HeaderPicture.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Nav } from 'react-bootstrap';

function Header() {

    return (

    <div id="Home">
        <div className="headerContent">
          <div className="text-center text-light">
            <h1 className="homeTitle display-2 ">Financial Advice</h1>
            <p className="headerSubText">We are a company with 10 years of experience</p>
            <p className="headerSubText pb-4">We will always advise you</p>
              <Nav.Link href="#Contact">
                <Button target='Project' variant="secondary" className="headerButton">Contact Us</Button>
              </Nav.Link>
          </div>
        </div>
    </div>
    )
}

export default Header;
