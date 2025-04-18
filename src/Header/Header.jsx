// Import React for creating the component.
import React from 'react';

// Import Bootstrap components for building a responsive and styled header.
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

// Importing the image used in the header.
import Chief from "../../public/chief's-kitchen-tales.png";



function Header() {
    return (
        // Bootstrap Navbar to create a responsive and styled navigation bar.
        <Navbar expand="lg" className="bg-body-tertiary shadow-lg p-3 mb-5 bg-white rounded">

            <Container>

                {/* Branding section with a title. */}
                <Navbar.Brand href="#"><b>Chief's Kitchen Tales</b></Navbar.Brand>

                {/* Toggle button for collapsing and expanding the navbar on smaller screens. */}
                <Navbar.Toggle aria-controls="navbarScroll" />

                {/* Navbar content */}
                <Navbar.Collapse id="navbarScroll">

                    {/* Navigation links for the different sections of the site. */}
                    <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link className='text-center' href="#action1">Home</Nav.Link>
                        <Nav.Link className='text-center' href="#action2">Recipes</Nav.Link>
                        <Nav.Link className='text-center' href="#action3">About</Nav.Link>
                        <Nav.Link className='text-center' href="#action4">Search</Nav.Link>
                    </Nav>

                    {/* Search form with an input field and a search button. */}
                    <Form className="d-flex pe-3">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    {/* Displaying an image (Logo or illustration) in the header. */}
                    <center>
                        <Image style={{ maxHeight: '100px', }} src={Chief} ></Image>
                    </center>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default Header; // Exporting the Header component to be used in other parts of the app.