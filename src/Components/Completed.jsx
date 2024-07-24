import React from 'react';
import './Completed.css';

export default function Completed({ tasks }) {
  return (
    <div className="completed-list">
      <h2>Completed</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
