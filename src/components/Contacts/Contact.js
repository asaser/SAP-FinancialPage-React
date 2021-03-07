import React from 'react';
import './Contact.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Contact() {
    return (
        <div id="Contact">
            <Container>
                <div className="pt-5 pb-3 text-center">
                    <p className="contactTitle">Contact</p>
                <Row className="mb-4">
                    <Col sm={12} md={4} lg={4}>
                        <FontAwesomeIcon icon="phone-square-alt" size='5x'></FontAwesomeIcon>
                        <p className="contactElements pt-3">+48 665-231-432</p>
                    </Col>

                    <Col sm={12} md={4} lg={4}>
                        <FontAwesomeIcon icon="envelope" size='5x'></FontAwesomeIcon>
                        <p className="contactElements pt-3">financialadvice@financial.com</p>
                    </Col>

                    <Col sm={12} md={4} lg={4}>
                        <FontAwesomeIcon icon="calendar-alt" size='5x'></FontAwesomeIcon>
                        <p className="contactElements pt-3">9:00 AM - 5:00 PM (Mon.-Fr.)</p>
                    </Col>
                </Row>

                <Row className="contactForm">
                    <Col sm={12} md={6} lg={6}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Your Name" className="input-lg"/>
                        </Form.Group>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" className="input-lg" />
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>

                <Row className="contactForm">
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" rows={6} />
                            </Form.Group>
                            <Button className="contactButton" variant="secondary" btn-lg block>Send</Button>
                        </Form>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}

export default Contact;
