import "../styles/ToDoCounter.css";
import PropTypes from "prop-types";

function ToDoCounter({ count }) {
  return (
    <div>
      <div>
        <h2 className="titleCounter">Total de Tareas: {count}</h2>
      </div>
    </div>
  );
}

ToDoCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ToDoCounter;
