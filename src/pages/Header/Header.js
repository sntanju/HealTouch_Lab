import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const {users, logOut} = useAuth();
    return (
        <div className="header">
            
            <Navbar bg="light" variant="light" sticky="top">
                <Container>
                <Nav >

                <NavLink style={{textDecoration:"none", margin: '10px', padding: '10px', color: 'white', backgroundColor: 'teal' ,border: '1px solid gray', borderRadius: '5px'}}  to="/home">Home</NavLink>
                 
                 <NavLink style={{textDecoration:"none", margin: '10px', padding: '10px', color: 'white', backgroundColor: 'teal' ,border: '1px solid gray', borderRadius: '5px'}} to="/allservice">Services</NavLink>

                 <NavLink style={{textDecoration:"none", margin: '10px', padding: '10px', color: 'white', backgroundColor: 'teal' ,border: '1px solid gray', borderRadius: '5px'}}  to="#features">About Us</NavLink>

                 <NavLink  style={{textDecoration:"none", margin: '10px', padding: '10px', color: 'white', backgroundColor: 'teal' ,border: '1px solid gray', borderRadius: '5px'}}  to="#pricing">Contact Us</NavLink>
                 
                 {users?.email ? 
                <button onClick={logOut} className="detail-btn">LogOut</button>: 
                <NavLink  style={{textDecoration:"none", margin: '10px', padding: '10px', color: 'white', backgroundColor: 'teal' ,border: '1px solid gray', borderRadius: '5px'}}  to="/login">Login</NavLink> 
                }
                    <Navbar.Text>
                        <a href = '#login'>{users?.displayName}</a>
                    </Navbar.Text>

                 </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;