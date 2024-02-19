import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function CreateTaskForm(props) {
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("High");
  const [taskCategory, setTaskCategory] = useState("");

  const task = {
    taskName: taskName,
    taskPriority: taskPriority,
    taskCategory: taskCategory,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    window.localStorage.setItem("task", JSON.stringify(task));
    props.addTask(task);
    props.handleClose();
  };

  return (
    <>
      <div className="overlay">
        <form className="create-task-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h1 className="create-task-header">Create Task</h1>
            <button className="close-form-button" onClick={props.handleClose}>
              <CloseIcon />
            </button>
          </div>
          <div className="create-task-form-field">
            <label className="form-label" htmlFor="task-name">
              Task Name:
            </label>
            <input
              id="task-name"
              className="form-input"
              type="text"
              onChange={(e) => {
                setTaskName(e.target.value);
              }}
            />
          </div>
          <div className="create-task-form-field">
            <label className="form-label" htmlFor="task-name">
              Category:
            </label>
            <input
              id="task-category"
              className="form-input"
              type="text"
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
            />
          </div>
          <div className="create-task-form-field">
            <label className="form-label" htmlFor="task-priority">
              Task Priority:
            </label>
            <select
              id="task-priority"
              className="form-input"
              onChange={(e) => {
                setTaskPriority(e.target.value);
              }}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <button type="submit" className="create-task-submit">
            Create Task
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateTaskForm;
