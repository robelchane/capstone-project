"use client"; // Required for client-side components in the app directory
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { useAuth, } from '../context/AuthContext';
import './global.css';
import Link from 'next/link';

const LoginPage = () => {
  const router = useRouter();
  const { userLoggedIn, login, register, loginWithGoogle, resetUserPassword } = useAuth();
  const [loginerror, setLoginError] = useState('');
  const [signuperror, setSignupError] = useState('');
  const [page, setPage] = useState('login');
  const [loginusername, setLoginUsername] = useState('');
  const [loginpassword, setLoginPassword] = useState('');
  const [signupusername, setUsername] = useState('');
  const [signuppassword, setPassword] = useState('');
  const [signuppassword2, setPassword2] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [forgetpassworderror, setForgetPasswordError] = useState('');
  const [forgetpasswordsuccess, setForgetPasswordSuccess] = useState(false);

  // to get user icon and name

  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginusername, loginpassword);
      console.log('Login successful, navigating to /dashboard');
      router.push('/');
    } catch (error) {
      console.error('Failed to log in:', error);
      setLoginError('Failed to log in. Please check your credentials.');
    }
  };

  const onGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      console.log('Navigating to profile page');
      router.push('/');
    } catch (error) {
      setLoginError('Failed to log in with Google.');
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await resetUserPassword(forgotPasswordEmail);
      setForgetPasswordSuccess(true);
    } catch (error) {
      setForgetPasswordError('Failed to send reset email.');
    }
  };

  // Function to redirect to the home page
  const redirectToHome = () => {
    router.push('/'); // Redirects to the home page
  };

  return (
    <main className="login-main">
      <div className="login-container mt-24">
        <div className="login-left">
          <p>
            Welcome to Property Pros, your go-to platform for premium real estate listings and services. 
            Sign up to explore a variety of properties tailored to your needs.
          </p>
        </div>
        <div className="login-right">
          <div className="login-right-content">
            <div className="form-container">
              {forgotPassword ? (
                <form onSubmit={handleForgotPassword}>
                  <label>Enter your Email:</label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  />
                  {forgetpassworderror && (
                    <span className="text-red-500">{forgetpassworderror}</span>
                  )}
                  <button type="submit" className="reset-button">
                    Send Reset Email
                  </button>
                  {forgetpasswordsuccess && (
                    <span className="text-green-500">Email sent! Check your inbox.</span>
                  )}
                </form>
              ) : page === 'login' ? (
                <form onSubmit={handleLogin}>
                  <label>Username:</label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={loginusername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                  />
                  <label>Password:</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginpassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  {loginerror && <span className="text-red-500">{loginerror}</span>}
                  <button type="submit" className="login-button">Login</button>
                  <button type="button" className="reset-button" onClick={() => setForgotPassword(true)}>
                    Forgot Password?
                  </button>
                  <div className="text-center">or</div>
                  <button type="button" className="google-button" onClick={onGoogleSignIn}>
                    <FcGoogle className="mr-2" /> Sign in with Google
                  </button>
                  <div className="text-center">
                    Don’t have an account? 
                    <button 
                      className="signup-button" 
                      onClick={() => setPage('signup')}
                      style={{ marginLeft: '4px', cursor: 'pointer', background: 'none', border: 'none', color: 'blue', textDecoration: 'underline' }}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              ) : (
                <form>
                  <label>Username:</label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={signupusername}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label>Password:</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={signuppassword}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={signuppassword2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                  {signuperror && <span className="text-red-500">{signuperror}</span>}
                  <button type="submit" className="login-button">Sign Up</button>
                  <div className="text-center">
                    Already have an account? 
                    <button 
                      className="login-button" 
                      onClick={() => setPage('login')}
                      style={{ marginLeft: '4px', cursor: 'pointer', background: 'none', border: 'none', color: 'blue', textDecoration: 'underline' }}
                    >
                      Login
                    </button>
                  </div>
                </form>
              )}
              {/* Button to redirect to home page */}
              <button onClick={redirectToHome} className="home-button">
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;