import React, { useState } from 'react';
import authService from '../services/authService';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    authService.login(email, password)
      .then((response) => {
        // Store the token in local storage
        localStorage.setItem('token', response.token);
        // Redirect to the tasks page
        window.location.href = '/tasks';
      })
      .catch((error) => {
        console.error('Login error:', error);
        // Handle login errors (e.g., display an error message)
      });

  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </form>
    </div>
  );
};

export default Login;