import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import './SignIn.css';
import app from '../../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const SignIn = () => {
  const [successStatus, setSuccessStatus] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccessStatus(true);

        successStatus &&
          toast.success('Sign In successfully', {
            position: 'top-center',
            autoClose: 500,
          });
      })
      .catch((error) => {
        console.error('error', error);
      });

    form.reset();
  };

  const handleEmailBlur = (e) => {
    const email = e.target.value;
    setUserEmail(email);
    // console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert('Please enter your email address');
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert('Check your email to Reset your password');
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <div className="sign-in-container">
      <h3>
        Please <span className="sign-in">Sign In</span>
      </h3>

      <Form onSubmit={handleSignIn} className="w-50 mx-auto form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
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
        <p className="text-danger"></p>

        <Button type="submit" variant="primary" className="btn-sign-in">
          Sign In
        </Button>
      </Form>
      <p className="text-info mt-3">
        <small>
          New to this Website? Please <Link to="/register">Register</Link>
        </small>
      </p>
      <p className="text-info ">
        <button onClick={handleForgetPassword} className="btn btn-link">
          Forget Password?
        </button>
      </p>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
