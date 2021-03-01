import React from "react";
import "./NewCardList.css";
import NewCard from "../NewCard/NewCard";
function NewCardList({ cards, registered, onSave, onDelete, openPopupAuth }) {
  const [count, setCount] = React.useState(3);
  const dataToRender = cards.slice(0, count);
  function handleCount() {
    return setCount(count + 3);
  }
  function renderButton() {
    if (dataToRender.length !== cards.length) {
      return (
        <button className="news__button" onClick={handleCount}>
          Показать еще
        </button>
      );
    }
    return null;
  }
  return (
    <section className="news">
      <h2 className="news__title">Результаты поиска</h2>
      <div className="news__conteiner">
        {dataToRender.slice(0, count).map((item) => (
          <NewCard
            card={item}
            key={item.link}
            registered={registered}
            onSave={onSave}
            openPopupAuth={openPopupAuth}
            isSaved={true}
            onDelete={() => {
              onDelete(item);
            }}
          />
        ))}
      </div>
      {renderButton()}
    </section>
  );
}

export default NewCardList;
