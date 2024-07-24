import React from 'react';
import './Todo.css';

export default function Todo({ tasks, completeTask }) {
  return (
    <div className="todo-list">
      <h2>Todo</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => completeTask(index)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
