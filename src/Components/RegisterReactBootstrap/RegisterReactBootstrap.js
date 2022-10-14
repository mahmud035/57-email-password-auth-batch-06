import React, { useState } from 'react';
import './RegisterReactBootstrap.css';
import app from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
  const [validated, setValidated] = useState(false);

  const handleRegister = (e) => {
    const form = e.currentTarget;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error('error:', error);
      });
  };

  return (
    <div className="form-container">
      <h3 className="text-white">Please Register</h3>

      <Form
        onSubmit={handleRegister}
        noValidate
        validated={validated}
        className="w-50 mx-auto form"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide valid password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterReactBootstrap;
