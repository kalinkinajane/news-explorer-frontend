import React from "react";
import "./SavedNews.css";
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewCard from "../NewCard/NewCard";

function SavedNews({ cards, registered, onSignOut }) {
  const [isLinkClickBlack, setIsLinkClickBlack] = React.useState(true);
  function handleClick() {
    setIsLinkClickBlack(false);
  }
  return (
    <section className="saved-news page__content">
      <Header
        fill="black"
        className="type_black"
        onClickSave={handleClick}
        isClickSave={isLinkClickBlack}
        registered={registered}
        onSignOut={onSignOut}
      />
      <SavedNewsHeader cards={cards} />
      <div className="saved__cards">
        <div className="saved__conteiner">
          {cards.map((item) => (
            <NewCard key={item._id} card={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SavedNews;
