import axios from 'axios';

const API_URL = 'http://localhost:3001/tasks';

const taskService = {
  getTasks: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Get tasks error:', error);
      throw error;
    }
  },

  createTask: async (task) => {
    try {
      const response = await axios.post(API_URL, task);
      return response.data;
    } catch (error) {
      console.error('Create task error:', error);
      throw error;
    }
  },

  updateTask: async (id, task) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, task);
      return response.data;
    } catch (error) {
      console.error('Update task error:', error);
      throw error;
    }
  },

  deleteTask: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete task error:', error);
      throw error;
    }
  },
};

export default taskService;