import React from "react";

function TodoInputs({ handleAddTodo, inputText, setInputText, editSaveTodo }) {
  return (
    <div className="input-container">
      <input
        value={inputText.value}
        onChange={(e) => {
          setInputText({ ...inputText, value: e.target.value });
        }}
        type="text"
        placeholder="Add task"
      />
      <button
        onClick={() => {
          if (!inputText.value) {
            return;
          }
          if (inputText.edit) {
            editSaveTodo(inputText.value, inputText.index);
          } else {
            handleAddTodo(inputText.value);
          }

          setInputText({ value: "", edit: false });
        }}
      >
        {inputText.edit ? (
          <i  className="fa-solid fa-pen" ></i>
        ) : (
          <i className="fa-solid fa-plus"></i>
        )}
      </button>
    </div>
  );
}

export default TodoInputs;
