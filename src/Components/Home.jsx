
import React, { useState } from 'react';
import Todo from './Todo';
import Completed from './Completed';

export default function Home() {
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
    <>
      <h1>My To-do List</h1>
      <input 
        type='text' 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <Todo tasks={tasks} completeTask={completeTask} />
      <Completed tasks={completedTasks} />
    </>
  );
}

