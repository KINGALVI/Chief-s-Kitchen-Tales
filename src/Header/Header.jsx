import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Chief from "../../public/chief's-kitchen-tales.png";

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-lg p-3 mb-5 bg-white rounded">
            <Container>

                <Navbar.Brand href="#"><b>Chief's Kitchen Tales</b></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link className='text-center' href="#action1">Home</Nav.Link>
                        <Nav.Link className='text-center' href="#action2">Recipes</Nav.Link>
                        <Nav.Link className='text-center' href="#action3">About</Nav.Link>
                        <Nav.Link className='text-center' href="#action4">Search</Nav.Link>
                    </Nav>
                    <Form className="d-flex pe-3">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <center>
                        <Image style={{ maxHeight: '100px', }} src={Chief} ></Image>
                    </center>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;