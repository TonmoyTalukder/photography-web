import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

import arrowLeft from '../../../images/arrowLeft.png';
import arrowRight from '../../../images/arrowRight.png';
import Dropdown from '@restart/ui/esm/Dropdown';

const Header = () => {
    return (
        <>

            {/* <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <a class="navbar-brand" href="#">Hello Dear</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    </ul>
                </div>
            </nav> */}

            <Navbar collapseOnSelect expand="lg" className="fixed-top bg-transparent custom-margin" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="custom-background">
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
                </Container>
            </Navbar>

            <div class="jumbotron pt-6 d-flex align-items-center">
                    <div class="container text-start">
                        <div class="row align-items-center">
                            <div class="col-1">
                                <img src={arrowLeft} alt="arrow-left" class="img-fluid" />
                            </div>
                            <div class="col-10">
                                <div className="mx-5">
                                    <h2>A picture is Worth a thousand words</h2>
                                    <p> <br /> It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it. Our pride is in offering the best shoots as we help you tell your story in photos. </p>
                                    <button className="btn border border-danger rounded-pill">View Gallery</button>
                                </div>
                            </div>
                            <div class="col-1">
                                <img src={arrowRight} alt="arrow-right" class="img-fluid" />
                            </div>
                        </div>
                    </div>
            </div>
            {/* <Navbar collapseOnSelect expand="lg" className="position-sticky bg-transparent custom-margin" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                        </Nav> 
                        <Nav>
                            <Nav.Link href="/home#home" className="text-dark fw-bold">Home</Nav.Link>
                            <Nav.Link href="/home#about">About</Nav.Link>
                            <Nav.Link href="/home#service-and-package">Service &#38; Package</Nav.Link>
                            <Nav.Link href="/home#gallery">Gallery</Nav.Link>
                            <Nav.Link href="/home#faq">FAQ</Nav.Link>
                            <Nav.Link href="/home#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </>
    );
};

export default Header;