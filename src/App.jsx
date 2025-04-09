import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tab from "./components/Tab";
import TodoInputs from "./components/TodoInputs";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { input: "Add Your First Todo", completed: false },
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");
  const [inputText, setInputText] = useState({
    value: "",
    edit: false,
    index: NaN,
  });

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, { input: todo, completed: false }];
    setTodos(newTodos);
    handleSaveData(newTodos);
  };

  const handleEditTodo = (index) => {
    let newTodos = [...todos];
    let editTodo = newTodos[index];
    setInputText((prev) => ({
      ...prev,
      value: editTodo.input,
      index: index,
      edit: true,
    }));

    // editTodo["input"] = todo;
    // newTodos[index] = editTodo;
    // setTodos(newTodos);
    // handleSaveData(newTodos);
  };

  const editSaveTodo = (inputTextValue, index) => {
    let newTodos = [...todos];
    let editTodo = newTodos[index];
    if (editTodo) {
      editTodo["input"] = inputTextValue;
      newTodos[index] = editTodo;
      setTodos(newTodos);
      handleSaveData(newTodos);
    } else {
      return;
    }
  };

  const handleDeleteTodo = (index) => {
    let newTodo = todos.filter((val, valIndex) => valIndex !== index);
    setTodos(newTodo);
    handleSaveData(newTodo);
  };

  const handleCompletedTodo = (index) => {
    let newTodo = [...todos];
    let completedTodo = newTodo[index];
    completedTodo["completed"] = true;
    newTodo[index] = completedTodo;
    setTodos(newTodo);
    handleSaveData(todos);
  };

  function handleSaveData(currentTodos) {
    localStorage.setItem("todos-app", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todos-app")) {
      return;
    }

    let db = JSON.parse(localStorage.getItem("todos-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompletedTodo={handleCompletedTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInputs
        inputText={inputText}
        setInputText={setInputText}
        handleAddTodo={handleAddTodo}
        editSaveTodo={editSaveTodo}
      />
    </>
  );
}

export default App;
