import React from 'react';
import './Header.css';
import image from './header logo/mobile service logo.png'
import { Navbar, Nav, Container } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className='text-white px-3' href="#home"><img width={40} className='logo-img' src={image} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ps-3 fs-6 ">
                            <Nav.Link className='different pe-5 custom-text' href="#home">Home</Nav.Link>
                            <Nav.Link className='different pe-5  custom-text' href="#link">Services</Nav.Link>
                            <Nav.Link className='different pe-5  custom-text' href="#link">About</Nav.Link>
                            <Nav.Link className='different pe-5  custom-text' href='#link'>Contact <span>Us</span></Nav.Link>

                        </Nav>
                        <Nav.Link className='different pe-5  custom-text' href='#link'>Login</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;