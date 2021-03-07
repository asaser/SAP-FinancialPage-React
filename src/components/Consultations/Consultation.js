import React from 'react';
import './Consultation.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Nav } from 'react-bootstrap';

function Consultation() {
    return (
        <div className="mt-5">
            <div className="consultationContent">
                <div className="text-center text-light">
                    <h1 className="title">Free Financial Advice</h1>
                    <p className="pb-4">
                        We are a company with 10 years of experience and we will always advise you
                    </p>
                    <Nav.Link href="#Contact" className="consultationNavLink">
                        <Button target="Contact" variant="secondary">Contact Us</Button>
                    </Nav.Link>
                </div>
            </div>
        </div>
    )
}

export default Consultation;
