// src/components/ToDoList.jsx
import PropTypes from "prop-types";
import "../styles/ToDoList.css";

function ToDoList({ todos, handleDelete }) {
  return (
    <div className="card-container">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="card"
          style={{ backgroundColor: todo.color }}
        >
          <h2>{todo.title}</h2>
          <p>{todo.content}</p>
          <div className="icon-trash-container">
            <a
              className="icon-trash"
              href="#"
              onClick={() => handleDelete(todo.id)}
              style={{ backgroundColor: todo.color }}
            >
              🗑
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ToDoList;
