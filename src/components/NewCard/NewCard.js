import React from "react";
import "./NewCard.css";

function NewCard({ card }) {
  // const newsContent = card.text
  //     const size = 157;
  //     const newText = newsContent.slice(0, size);
  if (card._id) {
    return (
      <div className="card" key={card._id}>
        <div className="card__icon">
          <div className="card__keyword">{card.keyword}</div>
          <button
            className="card__delete"
            type="button"
            aria-label="Удалить"
            data-tooltip="Убрать из сохранённых"
          ></button>
        </div>
        <a
          className="card__link"
          href={card.link}
          target="_blank"
          rel="noreferrer"
        >
          <img className="card__image" alt={card.title} src={card.image} />
        </a>
        <div className="card__conteiner">
          <div className="card__date">{card.date}</div>
          <a
            className="card__link"
            href={card.link}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="card__title">{card.title}</h2>
            <p className="card__text">{card.text}</p>
            <p className="card__source">{card.source}</p>
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="card" key={card.id}>
      <div className="card__image-background">
        <button
          className="card__save"
          type="button"
          aria-label="Сохранить"
          data-tooltip="Войдите, чтобы сохранять статьи"
        ></button>
      </div>
      <a
        className="card__link"
        href={card.link}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__image" alt={card.title} src={card.image} />
      </a>
      <div className="card__conteiner">
        <div className="card__date">{card.date}</div>
        <a
          className="card__link"
          href={card.link}
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="card__title">{card.title}</h2>
          <p className="card__text">{card.text}</p>
          {/* <p className="card__text">{newText + '...'}</p> */}
          <p className="card__source">{card.source}</p>
        </a>
      </div>
    </div>
  );
}

export default NewCard;
