import "./SaveNewsHeader.css";
import showKeyWords from "../../utils/showKeyWords";

function SavedNewsHeader({ cards }) {
  return (
    <section className="saved page__content">
      <h1 className="saved__title">Сохранённые статьи</h1>
      <p className="saved__info">{`Грета, у вас ${cards.length} сохраненных статей`}</p>
      <p className="saved__keywords">
        По ключевым словам:&nbsp;
        {showKeyWords(cards)}
      </p>
    </section>
  );
}

export default SavedNewsHeader;
