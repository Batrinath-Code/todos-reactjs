import React from "react";

function Header({ todos }) {
  return (
    <header>
      <h1 className="text-gradient">
        You have {todos.length} open{" "}
        {todos.length !== 1 ? "tasks" : "task"}.
      </h1>
    </header>
  );
}

export default Header;
