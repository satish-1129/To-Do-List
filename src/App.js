import React, { useState } from 'react';
import Todo from './Todo';
import Completed from './Completed';


export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    const completedTask = newTasks.splice(index, 1);
    setTasks(newTasks);
    setCompletedTasks([...completedTasks, ...completedTask]);
  };

  return (
    <div className="app">
      <h1>My To-do List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <div className="lists">
        <Todo tasks={tasks} completeTask={completeTask} />
        <Completed tasks={completedTasks} />
      </div>
    </div>
  );
}
