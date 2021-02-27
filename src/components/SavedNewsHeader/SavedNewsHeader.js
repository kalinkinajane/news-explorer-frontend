import React from "react";
import "./SaveNewsHeader.css";
import showKeyWords from "../../utils/showKeyWords";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsHeader({ cards }) {
  const keywords = cards.reduce((sum, item) => {
    if (!sum[item.keyword]) {
      sum[item.keyword] = 1
      return sum
    }
    sum[item.keyword] = sum[item.keyword] + 1
    return sum
  }, {})
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <section className="saved page__content">
      <h1 className="saved__title">Сохранённые статьи</h1>
      {cards.length > 0 ?(<p className="saved__info">{`${currentUser.name}, у вас ${cards.length} сохраненных статей`}</p>): (<p className="saved__info">{`${currentUser.name}, у вас нет сохраненных статей`}</p>) }
      
      <p className="saved__keywords">
        По ключевым словам:&nbsp;
        {showKeyWords(Object.keys(keywords))}
      </p>
    </section>
  );
}

export default SavedNewsHeader;
