import React, { useState } from 'react';
import './RegisterReactBootstrap.css';
import app from '../../Firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
  const [passwordError, setPasswordError] = useState('');
  const [userSuccess, setUserSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    //* Validate Password
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError('Please provide at least two uppercase');
      return;
    }
    if (!/.{6}/.test(password)) {
      setPasswordError('Password should be at least six characters');
      return;
    }

    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError('Please provide at least one special character');
      return;
    }

    setPasswordError();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserSuccess(true);

        userSuccess &&
          toast.success('User created successfully!', {
            position: 'top-center',
            autoClose: 50,
          });

        verifyEmail();
        updateUserName(name);
      })
      .catch((error) => {
        console.error('error:', error);
        setPasswordError(error.message.slice(22, -2));
      });

    form.reset();
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert('Please check your email and verify your email address');
    });
  };

  const updateUserName = (name) => {
    //* Add User Name to firebase
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log('Added user name');
      })
      .catch((error) => {
        console.error('error:', error);
      });
  };

  return (
    <div className="form-container">
      <h3 className="text-white">
        Please <span className="text-info">Register</span>
      </h3>

      <Form onSubmit={handleRegister} className="w-50 mx-auto form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{passwordError}</p>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="text-info mt-3">
        <small>
          Already have an account? <Link to="/sign-in"> Sign in</Link>
        </small>
      </p>

      <ToastContainer />
    </div>
  );
};

export default RegisterReactBootstrap;
