import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({
  className,
  fill,
  onClickLink,
  isClickLink,
  onClickSave,
  isClickSave,
  onOpenLogin,
  isClickHeader,
  onCloseMenu,
}) {
  // Необходимо раскомментировать чтоб, отрисовалась страница с авторизацией
  const [loggedIn, setLoggedIn] = React.useState(true);
  // const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <>
      {loggedIn ? (
        <nav className={`nav__menu ${isClickHeader ? "nav__menu-activ" : ""} `}>
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link
                to="/"
                className={`nav__item ${
                  isClickLink && "nav__item_border-bottom-white"
                }`}
              >
                Главная
              </Link>
            </li>
            <li className="nav__list-item" onClick={onCloseMenu}>
              <button
                className="nav__button nav__button-auth"
                onClick={onOpenLogin}
              >
                Авторизация
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={`nav__menu ${isClickHeader ? "nav__menu-activ" : ""}`}>
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link
                to="/"
                className={`nav__item nav__item_${className}  ${
                  isClickLink && "nav__item_border-bottom-white"
                }`}
                onClick={onClickLink}
              >
                Главная
              </Link>
            </li>
            <li className="nav__list-item">
              <Link
                to="/saved-news"
                className={`nav__item nav__item_${className} ${
                  isClickSave && "nav__item_border-bottom-black"
                }`}
                onClick={onClickSave}
              >
                Сохранённые статьи
              </Link>
            </li>
            <li className="nav__list-item">
              <button
                className={`nav__button nav__button-user nav__button_${className}`}
              >
                Грета
                <svg
                  className="nav__button-exit"
                  width="18"
                  height="16"
                  fill={fill}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 2H2v12h4v2H2a2 2 0 01-2-2V2a2 2 0 012-2h4v2zm7.586 7l-4.293 4.134 1.414 1.362 6.707-6.459-6.707-6.459L9.293 2.94l4.293 4.134H4V9h9.586z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
export default Navigation;
