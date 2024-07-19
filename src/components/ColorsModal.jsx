// src/components/ColorPickerModal.jsx
import PropTypes from "prop-types";
import "../styles/ColorsModal.css";

function ColorPickerModal({ isOpen, onClose, onColorSelect }) {
  if (!isOpen) {
    return null;
  }

  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A6",
    "#33FFF6",
    "#FF5733",
    "#DAF7A6",
    "#FFC300",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#1ABC9C",
    "#2ECC71",
    "#3498DB",
    "#9B59B6",
    "#34495E",
    "#16A085",
    "#27AE60",
    "#2980B9",
    "#8E44AD",
    "#2C3E50",
    "#F1C40F",
    "#E67E22",
    "#E74C3C",
    "#ECF0F1",
    "#95A5A6",
    "#F39C12",
    "#D35400",
    "#C0392B",
    "#BDC3C7",
    "#7F8C8D",
    "#2980B9",
    "#E74C3C",
    "#8E44AD",
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Elije un color:</h2>
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => {
                onColorSelect(color);
                onClose();
              }}
            />
          ))}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

ColorPickerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onColorSelect: PropTypes.func.isRequired,
};

export default ColorPickerModal;
