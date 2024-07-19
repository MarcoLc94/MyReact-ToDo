// src/components/AddToDo.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/AddToDo.css";
import ColorPickerModal from "./ColorsModal";

function AddToDo({ setTodos }) {
  const [idCounter, setIdCounter] = useState(0);
  const [inputValue, setInputValue] = useState({
    id: "",
    color: "",
    title: "",
    content: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.title !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: idCounter,
          color: inputValue.color,
          title: inputValue.title,
          content: inputValue.content,
        },
      ]);

      setIdCounter((prevId) => prevId + 1);
    } else {
      alert("Escribe un titulo y un contenido a tu nueva tarea.");
    }
    setInputValue({ color: "#ffffff", title: "", content: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const handleColor = (color) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      color: color,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ColorPickerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onColorSelect={handleColor}
        />
        <a
          name="color"
          value={inputValue.color}
          href="#"
          onClick={() => setIsModalOpen(true)}
        >
          🎨
        </a>
        <input
          name="title"
          type="text"
          value={inputValue.title}
          onChange={handleInputChange}
          placeholder="Titulo"
        />
        <input
          name="content"
          type="text"
          value={inputValue.content}
          onChange={handleInputChange}
          placeholder="Nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

AddToDo.propTypes = {
  setTodos: PropTypes.func.isRequired,
};

export default AddToDo;
