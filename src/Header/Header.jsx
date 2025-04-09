import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary shadow-lg p-3 mb-5 bg-white rounded">
                <Container>

                    <Navbar.Brand href="#">Chief's Kitchen Tales</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Recipes</Nav.Link>
                            <Nav.Link href="#action3">About</Nav.Link>
                            <Nav.Link href="#action4">Search</Nav.Link>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
}

export default Header;