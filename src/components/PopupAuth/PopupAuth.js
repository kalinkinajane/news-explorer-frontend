import React from "react";
import "../PopupWithForm/PopupWithForm.css";
import { Link } from "react-router-dom";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../hooks/validForm";

function PopupAuth({ isOpen, onClose, onOpenLogin }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation();
  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm
      name="auth"
      isOpen={isOpen ? "popup_open" : ""}
      onClose={onClose}
    >
      <h2 className="popup__title">Регистрация</h2>
      <form className="popup__form" noValidate>
        <label className="popup__label">
          <h3 className="popup__input-title">Email</h3>
          <input
            type="email"
            name="email"
            id="user-email-auth"
            required
            className="popup__input"
            placeholder="Введите почту"
            value={values.email || ""}
            onChange={handleChange}
          ></input>
          <span className="popup__error" id="user-email-error">
            {errors.email || ""}
          </span>
        </label>
        <label className="popup__label">
          <h3 className="popup__input-title">Пароль</h3>
          <input
            type="password"
            name="password"
            id="user-password"
            required
            minLength="8"
            value={values.password || ""}
            className="popup__input"
            onChange={handleChange}
            placeholder="Введите пароль"
          ></input>
          <span className="popup__error" id="user-password-error">
            {errors.password || ""}
          </span>
        </label>
        <label className="popup__label">
          <h3 className="popup__input-title">Имя</h3>
          <input
            type="text"
            name="name"
            id="user-name"
            required
            minLength="2"
            maxLength="30"
            className="popup__input"
            placeholder="Введите свое имя"
            onChange={handleChange}
            value={values.name || ""}
          ></input>
          <span className="popup__error" id="user-name-error">
            {errors.name || ""}
          </span>
        </label>
        <button
          type="submit"
          className={`popup__button ${!isValid && "popup__button_disabled"}`}
        >
          Зарегистрироваться
        </button>
        <p className="popup__text">
          или &nbsp;
          <Link to="/" className="popup__link" onClick={onOpenLogin}>
            Войти
          </Link>
        </p>
      </form>
    </PopupWithForm>
  );
}
export default PopupAuth;
