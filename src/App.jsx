// src/App.jsx
import { useState } from "react";
import AddToDo from "./components/AddToDo";
import ToDoCounter from "./components/ToDoCounter";
import ToDoList from "./components/ToDoList";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "Instruccions",
      content:
        "Hello to write your own notes please use the input above me, and try it!",
    },
  ]);

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>
        My React ToDo <img src="/public/react.svg" alt="" />
      </h1>
      <AddToDo setTodos={setTodos} />
      <ToDoCounter count={todos.length} />
      <ToDoList todos={todos} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
