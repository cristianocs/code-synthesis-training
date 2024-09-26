import React, { useState } from 'react';
import taskService from '../services/taskService';

const TaskForm = ({ onTaskSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    taskService.createTask({ title, description, completed })
      .then((newTask) => {
        onTaskSubmit(newTask);
        setTitle('');
        setDescription('');
        setCompleted(false);
      })
      .catch((error) => {
        console.error('Task creation error:', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="completed">Completed:</label>
            <input
            type="checkbox"
            id="completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            />
        </div>
        <button type="submit">Add Task</button>
        </form>
    </div>
  );
};

export default TaskForm;