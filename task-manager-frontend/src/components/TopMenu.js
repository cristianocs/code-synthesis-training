import React from 'react';

const TopMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/tasks">Tasks</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;