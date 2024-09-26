import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskToggle }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onTaskToggle={onTaskToggle} />
      ))}
    </ul>
  );
};

export default TaskList;