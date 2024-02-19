function Task({ id, name, category, priority, onRemove }) {
  return (
    <div className="task-container">
      <h2 className="task-title">{name}</h2>
      <p className="task-category">Category: {category}</p>
      <p className="task-priority">Priority: {priority}</p>
      <div className="task-buttons">
        <button id="edit-task" className="task-button">
          Edit Task
        </button>
        <button
          id="remove-task"
          className="task-button"
          onClick={() => {
            onRemove(id);
          }}
        >
          Remove Task
        </button>
      </div>
    </div>
  );
}

export default Task;
