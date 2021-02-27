import React from "react";
import { Link } from "react-router-dom";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../hooks/validForm";
import "../PopupWithForm/PopupWithForm.css";

function Login({ isOpen, onClose, onOpenAuth, onLogin }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = values;
    onLogin(password, email);
    onClose();
  };
  return (
    <PopupWithForm
      name="login"
      isOpen={isOpen ? "popup_open" : ""}
      onClose={onClose}
    >
      <h2 className="popup__title">Вход</h2>
      <form className="popup__form" noValidate onSubmit={handleSubmit}>
        <div className="popup__input-content">
          <label className="popup__input-title">Email</label>
          <input
            type="email"
            name="email"
            id="user-email"
            required
            className="popup__input"
            placeholder="Введите почту"
            value={values.email || ""}
            onChange={handleChange}
          ></input>
          <span className="popup__error" id="user-email-error">
            {errors.email || ""}
          </span>
        </div>
        <div className="popup__input-content">
          <label className="popup__input-title">Пароль</label>

          <input
            type="password"
            name="password"
            id="user-password-login"
            required
            minLength="8"
            value={values.password || ""}
            className="popup__input"
            onChange={handleChange}
            placeholder="Введите пароль"
          ></input>
          <span className="popup__error" id="user-password-login-error">
            {errors.password || ""}
          </span>
        </div>
        <button
          type="submit"
          className={`popup__button ${!isValid && "popup__button_disabled"}`}
        >
          Войти
        </button>
        <p className="popup__text">
          или &nbsp;
          <Link to="/" className="popup__link" onClick={onOpenAuth}>
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </PopupWithForm>
  );
}
export default Login;
