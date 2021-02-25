import React from "react";
import "./Main.css";
import Avatar from "../../images/avatar.png";
import Search from "../Search/Search";
import NewCardList from "../NewCardList/NewCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
function Main({ data, onOpenLogin, isOpen, registered, onSignOut, isLoading, searchNews }) {
  const [isClickLink, setIsClickLink] = React.useState(true);
  // const [isPreloader, setPrelosder] = React.useState(false);
  // const [dataCards, setCards] = React.useState(cards);
  // Необходимо раскомментировать чтобы увидеть карточки
  // const [dataCards, setCards] = React.useState(null);
  // Раскомментировать чтоб увидеть сообщение "Ничего не найдено"
  // const [dataCards, setCards ] = React.useState([]);
  

  const renderContent = (data, isLoading) =>{
    if(isLoading){
      return <Preloader /> 
    }
    if (data === null) {
      return null;
    }
    if (data.length === 0) {
      return <NothingFound />;
    }
    return  <NewCardList cards={data} /> 
    // if (data.length > 0) {
    //   return  <NewCardList cards={data} /> 
    // }
  }

  function handleClicklik() {
    setIsClickLink(false);
  }
  return (
    <main className="page__content">
      <Search registered={registered}
        fill="white"
        className="type_white"
        onClickLink={handleClicklik}
        isClickLink={isClickLink}
        onOpenLogin={onOpenLogin}
        isOpen={isOpen}
        onSignOut={onSignOut}
        searchNews={searchNews}
      />
     
      {renderContent(data, isLoading)}
      <div className="author__content page__content">
        <img
          className="author__avatar"
          src={Avatar}
          alt="Аватар пользователя"
        />
        <div className="author__conteiner">
          <h2 className="author__title">Об авторе</h2>
          <p className="author__text">
            Это блок с описанием автора проекта. Здесь следует указать, как вас
            зовут, чем вы занимаетесь, какими технологиями разработки владеете.
          </p>
          <p className="author__text">
            Также можно рассказать о процессе обучения в Практикуме, чему вы тут
            научились, и чем можете помочь потенциальным заказчикам.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
