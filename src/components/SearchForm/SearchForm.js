import React from "react";
import "../SearchForm/SearchForm.css";

function SearchForm({ searchNews }) {
  const input = React.useRef(null);
  function search(e) {
    e.preventDefault();
    searchNews(input.current.value);
  }

  return (
    <div className="search__form-conteiner">
      <form className="search__form" onSubmit={search}>
        <label className="search__input-content">
          <input
            ref={input}
            className="search__input"
            placeholder="Введите тему новости"
            type="text"
            required
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
