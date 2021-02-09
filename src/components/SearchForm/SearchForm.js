import "../SearchForm/SearchForm.css";
function SearchForm() {
  return (
    <div className="search__form-conteiner">
      <form className="search__form">
        <input
          className="search__input"
          placeholder="Введите тему новости"
        ></input>
        <button className="search__button" type="submit">
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
