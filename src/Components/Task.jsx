/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Task.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [datetimeInput, setDatetimeInput] = useState('');
  const [editIndex, setEditIndex] = useState(null); // Track index of the task being edited
  const [editTaskInput, setEditTaskInput] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let day = now.getDate();
    if (day < 10) day = '0' + day;
    let hours = now.getHours();
    if (hours < 10) hours = '0' + hours;
    let minutes = now.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  const addTask = () => {
    if (taskInput.trim() !== '' && datetimeInput !== '') {
      const newTasks = [...tasks, { task: taskInput.trim(), datetime: datetimeInput }];
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      setTaskInput('');
      setDatetimeInput('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const editTask = (index) => {
    setEditIndex(index); // Set index of the task being edited
    setEditTaskInput(tasks[index].task); // Set input field value to the current task text
  };

  const saveEditedTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].task = editTaskInput;
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setEditIndex(null); // Reset editIndex after saving changes
  };

  return (
    <div className="Task-sche">
      <motion.h1 variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.4 }} className='task-title'>Task Scheduler</motion.h1>
      <motion.input
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
        className='inp-text'
        type="text"
        placeholder="Enter your task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <motion.input
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
        type="datetime-local"
        className='date-inp'
        value={datetimeInput}
        min={getCurrentDateTime()} // Set min to current date and time
        onChange={(e) => setDatetimeInput(e.target.value)}
      />
      <motion.button variants={fadeIn("down", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.4 }}className='addTaskbtn' onClick={addTask}>Add Task</motion.button>
      <ul className='tasks-ul'>
        {tasks.map((task, index) => (
          <li key={index} className="taskItem">
            {editIndex === index ? (
              <input
                className='inp-text edited'
                type="text"
                value={editTaskInput}
                onChange={(e) => setEditTaskInput(e.target.value)}
              />
            ) : (
              <>
                <span>{task.task}</span>
                <span className='date-align'>{new Date(task.datetime).toLocaleString()}</span>
              </>
            )}
            <div className="btn-cont">
              {editIndex === index ? (
                <button className='Task-save' onClick={() => saveEditedTask(index)}>Save</button>
              ) : (
                <button className='Task-edit' onClick={() => editTask(index)}>Edit</button>
              )}
              <button className='Task-delete' onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
