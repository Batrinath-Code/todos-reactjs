import React from "react";
import TodoCards from "./TodoCards";

function TodoList({
  todos,
  selectedTab,
  handleDeleteTodo,
  handleCompletedTodo,
  handleEditTodo
}) {
  const filteredTodos =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.completed)
      : todos.filter((val) => !val.completed);

  return (
    <>
      {filteredTodos.map((todo, todoIndex) => {
        return (
          <TodoCards
          handleEditTodo={handleEditTodo}
            handleCompletedTodo={handleCompletedTodo}
            handleDeleteTodo={handleDeleteTodo}
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            todo={todo}
          />
        );
      })}
    </>
  );
}

export default TodoList;
