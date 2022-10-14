import React from 'react';
import './RegisterReactBootstrap.css';
import { Button, Form } from 'react-bootstrap';

const RegisterReactBootstrap = () => {
  return (
    <div className="form-container">
      <h3 className="text-white">Please Register</h3>
      <Form className="w-50 mx-auto form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterReactBootstrap;
