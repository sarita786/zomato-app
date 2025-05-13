import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-danger text-white mt-5 py-4">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Zomato</h5>
            <p>Your favorite food, delivered with love.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Menu</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p>Email: support@zomato.com</p>
            <p>Phone: +61 2 1234 5678</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Zomato. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
