import React, { useEffect, useRef } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className='header'>
                <div className='header-menu'>
                <hr />
                <Navbar className='header-nav' expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="header-nav-div me-auto gap-3">
                            <Link to="/" >HOME</Link>
                            <Link to="/about" >ABOUT</Link>
                            {user.email && <Link to="/Dashboard" >Dashboard</Link>}

                        </Nav>
                        </Navbar.Collapse>
                    
                </Navbar>

                </div>
            </div>
        </div>
    );
};

export default Header;