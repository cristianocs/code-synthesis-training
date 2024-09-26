import axios from 'axios';

const API_URL = 'http://localhost:3001';

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { "user": { email, password }});
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  signup: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, { "user": {email, password }});
      return response.data;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  },
};

export default authService;