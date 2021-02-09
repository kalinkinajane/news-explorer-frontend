import React from "react";
import "./Search.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

function Search({
  fill,
  className,
  onClickLink,
  isClickLink,
  onOpenLogin,
  isOpen,
}) {
  return (
    <section className="search__content">
      <Header
        fill={fill}
        className={className}
        onClickLink={onClickLink}
        isClickLink={isClickLink}
        onOpenLogin={onOpenLogin}
        isOpen={isOpen}
      />
      <div className="search__conteiner">
        <h1 className="search__title">Что творится в мире?</h1>
        <p className="search__text">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </p>
      </div>
      <SearchForm />
    </section>
  );
}

export default Search;
