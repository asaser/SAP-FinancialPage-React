import React from 'react';
import './About.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function About() {
    return (
        <div id="About">
            <Container className="aboutContainer">
                <div className="text-center">
                        <p className="aboutTitle">Who are we?</p>
                        <p className="aboutSubTitle mr-auto ml-auto">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor ,
                        sed quia non numquam eius modi tempora incidunt.
                        </p>
                </div>

                <Row className="text-center">
                    <Col sm={12} md={6} lg={3} className="aboutElement">
                        <Card className="abutMainCard">
                            <Card.Body>
                            <FontAwesomeIcon icon="brain" size='3x' className="aboutIcon"></FontAwesomeIcon>
                                <Card.Title className="text-uppercase">experience</Card.Title>
                            </Card.Body>
                        </Card>
                        <ListGroup variant="flush" className="aboutListGroup">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col sm={12} md={6} lg={3} className="aboutElement">
                    <Card className="abutMainCard">
                            <Card.Body>
                            <FontAwesomeIcon icon="vote-yea" size='3x' className="aboutIcon"></FontAwesomeIcon>
                                <Card.Title className="text-uppercase">projects</Card.Title>
                            </Card.Body>
                        </Card>
                        <ListGroup variant="flush" className="aboutListGroup">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="aboutElement">
                    <Card className="abutMainCard">
                            <Card.Body>
                                <FontAwesomeIcon icon="users" size='3x' className="aboutIcon"></FontAwesomeIcon>
                                <Card.Title className="text-uppercase">team</Card.Title>
                            </Card.Body>
                        </Card>
                        <ListGroup variant="flush" className="aboutListGroup">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="aboutElement">
                    <Card className="abutMainCard">
                            <Card.Body>
                            <FontAwesomeIcon icon="shield-alt" size='3x' className="aboutIcon"></FontAwesomeIcon>
                                <Card.Title className="text-uppercase">security</Card.Title>
                            </Card.Body>
                        </Card>
                        <ListGroup variant="flush" className="aboutListGroup">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
