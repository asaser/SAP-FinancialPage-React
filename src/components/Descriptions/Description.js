import React from 'react';
import './Description.css';

// import HeaderPicture from '../assets/img/HeaderPicture.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Description() {
    return (
        <div id="Description" className="projectMainClass">
            <Container className="pt-2 pb-5">
                <div className="pt-3 pb-5 text-center">
                    <p className="descriptionTitle">Company Description</p>
                    <p className="descriptionSubTitle">
                        Lorem ipsum Lorem ipsum
                    </p>
            </div>

                <Row>
                    <Col sm={6} md={4} lg={3} className="projectElement text-center mb-4">
                        <h3 className="projectFirstNumber">350</h3>
                        <div className="underFirstNumber"></div>
                        <h4 className="projectSecondNumber">Clients</h4>
                    </Col>

                    <Col sm={6} md={4} lg={3} className="projectElement text-center mb-4">
                        <h3 className="projectFirstNumber">95</h3>
                        <div className="underFirstNumber"></div>
                        <h4 className="projectSecondNumber">Members</h4>
                    </Col>

                    <Col sm={6} md={4} lg={3} className="projectElement text-center mb-4">
                        <h3 className="projectFirstNumber">20</h3>
                        <div className="underFirstNumber"></div>
                        <h4 className="projectSecondNumber">Awards</h4>
                    </Col>

                    <Col sm={6} md={4} lg={3} className="projectElement text-center mb-4">
                        <h3 className="projectFirstNumber">30</h3>
                        <div className="underFirstNumber"></div>
                        <h4 className="projectSecondNumber">Employees</h4>
                    </Col>
                </Row>

                <Row className="pt-5 mb-4">
                <Col sm={6} md={6} lg={6} className="projectElement text-center">
                        <FontAwesomeIcon icon="vote-yea" size='3x' className="aboutIcon"></FontAwesomeIcon>
                        <h3 className="projectFirstNumber">Big Projects</h3>
                        <div className="underFirstNumber"></div>
                        <h3 className="projectSecondNumber">55</h3>
                    </Col>

                    <Col sm={6} md={6} lg={6} className="projectElement text-center">
                        <FontAwesomeIcon icon="vote-yea" size='3x' className="aboutIcon"></FontAwesomeIcon>
                        <h3 className="projectFirstNumber">Small Projects</h3>
                        <div className="underFirstNumber"></div>
                        <h3 className="projectSecondNumber">165</h3>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Description;
