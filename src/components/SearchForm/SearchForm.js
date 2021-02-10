import React from "react";
import "../SearchForm/SearchForm.css";
function SearchForm() {
  return (
    <div className="search__form-conteiner">
      <form className="search__form">
        <label className="search__input-content">
        <input
          className="search__input"
          placeholder="Введите тему новости"
          type="text"
          required
          autoFocus
        ></input>
        </label>
        <button className="search__button" type="submit">
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
