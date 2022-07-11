import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import image from './header logo/mobile service logo2.png'
const Header = () => {
    return (
        <div>
            <Navbar light bgColor='light' expand="lg">
                <Container>
                    <Navbar.Brand className='text-white px-3' href="#home"><img height={30} className='logo-img' src={image} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center fs-6 ">
                            <Nav.Link className='different pe-5  text-black' href="#home">Home</Nav.Link>
                            <Nav.Link className='different pe-5   text-black' href="#link">Services</Nav.Link>
                            <Nav.Link className='different pe-5   text-black' href="#link">About</Nav.Link>
                            <Nav.Link className='different  text-black' href='#link'>Contact <span>Us</span></Nav.Link>
                        </Nav>
                        <Nav.Link className='different  text-black' href='#link'>Login</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;