import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <Navbar bg="light" variant="light" fixed="top">
                <Container>
                <Nav >

                <NavLink style={{textDecoration:"none", margin: '10px', padding: '10px', color: 'white', backgroundColor: 'teal' ,border: '1px solid gray', borderRadius: '5px'}}  to="#home">Home</NavLink>
                 
                 <NavLink style={{textDecoration:"none", margin: '10px', padding: '10px', color: 'white', backgroundColor: 'teal' ,border: '1px solid gray', borderRadius: '5px'}} to="#home">Services</NavLink>

                 <NavLink style={{textDecoration:"none", margin: '10px', padding: '10px', color: 'white', backgroundColor: 'teal' ,border: '1px solid gray', borderRadius: '5px'}}  to="#features">About Us</NavLink>

                 <NavLink  style={{textDecoration:"none", margin: '10px', padding: '10px', color: 'white', backgroundColor: 'teal' ,border: '1px solid gray', borderRadius: '5px'}}  to="#pricing">Contact Us</NavLink>

                 </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;