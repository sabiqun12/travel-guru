import React from 'react';
import logo from '../image/Logo.png';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light">
        <img
                src={logo}
                width="80"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
        />
                <Form inline>
                    <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                    <Button variant="warning">Search</Button>
                </Form>
                <Nav className=" ml-auto">
                    <Nav.Link href  ="/news">News </Nav.Link >
                    <Nav.Link href  ="/destination/1">Destination</Nav.Link>
                    <Nav.Link href  ="/blog">Blog</Nav.Link>
                    <Nav.Link href  ="/contact">Contact</Nav.Link>
                    <Nav.Link href  ="/logIn"><Button variant="warning">Log In</Button></Nav.Link>
                </Nav>
                
            </Navbar>
        </>
    );
}

export default NavBar;