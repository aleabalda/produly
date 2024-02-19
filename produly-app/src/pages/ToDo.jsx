import React, { useState, useEffect } from "react";
import Task from "../components/Task";
import CreateTaskForm from "../components/CreateTaskForm";

function ToDo() {
  const TASKS_STORAGE_KEY = "Produly_Tasks";

  // Initialize tasks state with empty array
  const [tasks, setTasks] = useState([]);
  const [overlayOn, setOverlayOn] = useState(false);

  // Function to toggle overlay visibility
  const toggleOverlay = () => {
    setOverlayOn(!overlayOn);
  };

  // Function to save tasks to local storage
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  };

  // Function to retrieve tasks from local storage
  const getTasksFromLocalStorage = () => {
    const tasksJson = localStorage.getItem(TASKS_STORAGE_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
  };

  // Load tasks from local storage when component mounts
  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
  }, []);

  // Function to add a new task
  // In ToDo component, modify the addTask function
  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() }; // Ensure task has a unique ID
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  };

  // In ToDo component
  const removeTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  };

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">To-do List</h1>
        <button className="create-task-button" onClick={toggleOverlay}>
          Create a New Task
        </button>
      </div>
      <div className="grid-container">
        {tasks.map((task, index) => (
          <Task
            key={index}
            id={task.id}
            name={task.taskName}
            category={task.taskCategory}
            priority={task.taskPriority}
            onRemove={removeTask}
          />
        ))}
      </div>
      {overlayOn && (
        <CreateTaskForm addTask={addTask} handleClose={toggleOverlay} />
      )}
    </>
  );
}

export default ToDo;
