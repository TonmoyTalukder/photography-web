import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './Header.css';

import arrowLeft from '../../../images/arrowLeft.png';
import arrowRight from '../../../images/arrowRight.png';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="fixed-top bg-transparent custom-margin" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className="" />
                    
                    <Navbar.Collapse id="" className="custom-background">
                        <Nav className="me-auto">
                            
                        </Nav> 
                        <Nav>
                            <Nav.Link href="/home#home" className="text-dark custom-border">Home</Nav.Link>
                            <Nav.Link href="/home#about" className="text-dark custom-border">About</Nav.Link>
                            <Nav.Link href="/home#service-and-package" className="text-dark custom-border">Service &#38; Package</Nav.Link>
                            <Nav.Link href="/home#gallery" className="text-dark custom-border">Gallery</Nav.Link>
                            <Nav.Link href="/home#faq" className="text-dark custom-border">FAQ</Nav.Link>
                            <Nav.Link href="/home#contact" className="text-dark custom-border">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/home#home" className="text-dark text-center custom-border">Home</Nav.Link>
                            <Nav.Link href="/home#about" className="text-dark text-center custom-border">About</Nav.Link>
                            <Nav.Link href="/home#service-and-package" className="text-dark text-center custom-border">Service &#38; Package</Nav.Link>
                            <Nav.Link href="/home#gallery" className="text-dark text-center custom-border">Gallery</Nav.Link>
                            <Nav.Link href="/home#faq" className="text-dark text-center custom-border">FAQ</Nav.Link>
                            <Nav.Link href="/home#contact" className="text-dark text-center custom-border">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <div className="jumbotron pt-6 d-flex align-items-center">
                    <div className="container text-start">
                        <div className="row align-items-center">
                            <div className="col-1">
                                <img src={arrowLeft} alt="arrow-left" className="img-fluid" />
                            </div>
                            <div className="col-10">
                                <div className="mx-5">
                                    <h2>A picture is Worth a thousand words</h2>
                                    <p> <br /> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos. </p>
                                    <button className="btn border border-danger rounded-pill">View Gallery</button>
                                </div>
                            </div>
                            <div className="col-1">
                                <img src={arrowRight} alt="arrow-right" className="img-fluid" />
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Header;