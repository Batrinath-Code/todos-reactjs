import React from "react";

function TodoCards({
  todo,
  todoIndex,
  handleDeleteTodo,
  handleCompletedTodo,
  handleEditTodo,
}) {
  const { input, completed } = todo;

  return (
    <div className="card todo-items">
      <p>{input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handleCompletedTodo(todoIndex);
          }}
          disabled={completed}
        >
          <h6>Done</h6>
        </button>
        <button
          onClick={() => {
            handleEditTodo(todoIndex);
          }}
          disabled={completed}
        >
          <h6>Edit</h6>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}

export default TodoCards;
