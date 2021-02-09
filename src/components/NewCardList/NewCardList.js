import React from "react";
import "./NewCardList.css";
import NewCard from "../NewCard/NewCard";
function NewCardList({ cards }) {
  const [count, setCount] = React.useState(3);
  function handleCount() {
    return setCount(count + 3);
  }
  return (
    <section className="news">
      <h2 className="news__title">Результаты поиска</h2>
      <div className="news__conteiner">
        {cards.slice(0, count).map((item) => (
          <NewCard key={item.id} card={item} />
        ))}
      </div>

      <button className="news__button" onClick={handleCount}>
        Показать еще
      </button>
    </section>
  );
}

export default NewCardList;
