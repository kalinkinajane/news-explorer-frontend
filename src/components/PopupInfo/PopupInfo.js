import React from "react";
import { Link } from "react-router-dom";
import "../PopupWithForm/PopupWithForm.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
function PopupInfo({ isOpen, onClose, onOpenLogin }) {
  return (
    <PopupWithForm
      name="info"
      isOpen={isOpen ? "popup_open" : ""}
      onClose={onClose}
    >
      <h2 className="popup__title-itfo">
        Пользователь успешно зарегистрирован!
      </h2>
      <Link to="/" className="popup__link" onClick={onOpenLogin}>
        Войти
      </Link>
    </PopupWithForm>
  );
}
export default PopupInfo;
