import React from "react";
import "./PopupWithForm.css";
function PopupWithForm({ name, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_open"}`}>
      <div className={`popup__conteiner popup__conteiner-${name}`}>
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
}
export default PopupWithForm;
