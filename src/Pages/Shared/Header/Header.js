import React from 'react';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div>
            <Navbar className='nav-new' expand="lg">
                <Container>
                    <Navbar.Brand className='text-white' href="#home">Mobile <span className='brand-style'>Service</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" d-flex align-items-center mx-auto fs-6 ">
                            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#link">Services</Nav.Link>
                            <Nav.Link className='text-white' href="#link">About</Nav.Link>
                            <Nav.Link className='text-white' href='#link'>Contact <span>Us</span></Nav.Link>
                        </Nav>

                        <div className="input d-flex justify-content-center  ">
                            <div className="form-outline ">
                                <input placeholder='search' id="search-focus form1" type="search" className="form-control search-inp " />
                            </div>
                            <button type="button" className=" search-btn mx-2 ">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                Search
                            </button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;