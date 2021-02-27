import React from "react";
import "./NewCard.css";

const NewCard = ({ card, registered, onSave, isSaved, onDelete, openPopupAuth }) => {
  const isActive = card._id;
  function handleClick() {
    onSave(card);
  }
  const renderButton = (registered, isSaved) => {
    if (!registered) {
      return (
        <div className="card__image-background">
          <span className="card__save-info">
            Войдите, чтобы сохранять статьи
          </span>
          <button
          onClick={openPopupAuth}
            className="card__save"
            type="button"
            aria-label="Сохранить"
          ></button>{" "}
        </div>
      );
    }
    if (isSaved) {
      return (
        <button
          onClick={isActive ? onDelete : handleClick}
          className={`card__save-active ${isActive ? "card__active" : ""}`}
          type="button"
          aria-label="Сохранить"
        ></button>
      );
    }
    return (
      <div className="card__icon">
        <div className="card__keyword">{card.keyword}</div>
        <span className="card__delet-info">Убрать из сохранённых</span>
        <button
          className="card__delete"
          onClick={onDelete}
          type="button"
          aria-label="Удалить"
        ></button>
      </div>
    );
  };
  return (
    <div className="card" key={card.link}>
      {renderButton(registered, isSaved)}
      <a
        className="card__link"
        href={card.link}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__image" alt={card.title} src={card.image} />
      </a>
      <a
        className="card__link"
        href={card.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="card__conteiner">
          <div className="card__discription">
            <div className="card__date">{card.date}</div>
            <h2 className="card__title">{card.title}</h2>
            <p className="card__text">{card.text}</p>
          </div>
          <p className="card__source">{card.source}</p>
        </div>
      </a>
    </div>
  );
};
export default NewCard;
