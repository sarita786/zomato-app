import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import ZomatoNavbar from '../components/Navbar';

const Login = () => {
  return (
    <>
   <ZomatoNavbar/>
      <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '80vh' }}>
        <div className='w-100 p-4 shadow rounded bg-white' style={{ maxWidth: '400px' }}>
          <Form>
            <h2 className="mb-4 text-center">Login</h2>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
              <div className='mt-2'>
                <p>Don't have an account?
                  <Link to="/register"> Sign up</Link></p>
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
