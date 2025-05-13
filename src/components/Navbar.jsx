import React from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

const ZomatoNavbar = () => {
  return (
    <Navbar expand="lg" bg="danger" variant="dark" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-4">Zomato</Navbar.Brand>

        <Navbar.Toggle aria-controls="zomato-navbar-nav" />
        <Navbar.Collapse id="zomato-navbar-nav" className="justify-content-between">
          <Form className="d-flex search-bar mx-auto">
            <FormControl
              type="search"
              placeholder="Search for restaurant or cuisine"
              className="me-2"
            />
            <Button variant="light">Search</Button>
          </Form>

          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/menu" className="text-white mx-2">Menu</Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-white mx-2">Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className="text-white mx-2">Sign Up</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ZomatoNavbar;
