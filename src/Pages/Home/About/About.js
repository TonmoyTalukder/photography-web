import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './About.css';
import aboutBanner from '../../../images/aboutBanner.png';

const About = () => {
    return (
        <Container className="py-5 mt-5"  id="about">
            <Row className="gy-5">
                <Col>
                    <div className="row gy-1 mx-5 px-5">
                        <div className="col">
                            <div className="p-0 imgOne">
                                <img src={aboutBanner} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-0 imgTwo">
                                <img src={aboutBanner} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-0 imgThree">
                                <img src={aboutBanner} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* <img src={aboutBanner} alt="" /> */}
                </Col>
                <Col>
                    <h2>About Us</h2>
                    <p className="text-start">
                        Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;