import React from 'react'
import ZomatoNavbar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';

const Register =()=>{
  return(
    <>
    <ZomatoNavbar/>
    <Container className='d-flex justify-content-center align-items-center' style={{minHeight:'80vh'}}>
      <div className='w-100 p-4 shadow rounded bg-white' style={{maxWidth: '400px'}}>
        <Form>
          <h2 className='mb-4 text-center'>Sign up</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="forBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Enter confirm paassword"/>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">Sign up</Button>
        </Form>
      </div>
    </Container>
    <Footer/>
    </>
  )
}

export default Register; 