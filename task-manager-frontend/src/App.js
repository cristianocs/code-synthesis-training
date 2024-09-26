import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TaskForm from './components/TaskForm'; // Assuming you'll have a Tasks component
import PrivateRoute from './components/PrivateRoute';
import axios from 'axios';

function App() {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Get token from local storage
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tasks" element={
            <PrivateRoute>
              <TaskForm /> 
            </PrivateRoute>
          } />
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;