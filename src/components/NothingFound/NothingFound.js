import React from "react";
import "./NothingFound.css";
import NotFound from "../../images/not-found.png";

function NothingFound() {
  return (
    <section className="nothing-found">
      <img
        className="nothing-found__image"
        src={NotFound}
        alt="Ничего не найдено"
      />
      <h2 className="nothing-found__title">Ничего не найдено</h2>
      <p className="nothing-found__text">
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </section>
  );
}

export default NothingFound;
