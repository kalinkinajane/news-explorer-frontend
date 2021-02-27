import React from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import PopupLogin from "../PopupLogin/PopupLogin";
import PopupAuth from "../PopupAuth/PopupAuth";
import PopupInfo from "../PopupInfo/PopupInfo";
import data from "../../data/data.js";
import saveData from "../../data/savedata.js";

function App() {
  const [isPopupLoginOpen, setIsPopupLoginOpen] = React.useState(false);
  const [isPopupAuthOpen, setIsPopupAuthOpen] = React.useState(false);
  const [isPopupInfoOpenClose, setIsPopupInfoOpenClose] = React.useState(false);
  // const [isPopupInfoOpenClose, setIsPopupInfoOpenClose] = React.useState(true);
  //Раскомментировать чтоб увидеть попап инфо
  const openPopupLogin = () => {
    setIsPopupAuthOpen(false);
    setIsPopupLoginOpen(true);
  };
  function openPopupAuth() {
    setIsPopupAuthOpen(true);
    setIsPopupLoginOpen(false);
  }
  // function handlePopupInfoOpen() {
  //   setIsPopupInfoOpenClose(true)
  // }
  const closeAllPopups = () => {
    setIsPopupLoginOpen(false);
    setIsPopupAuthOpen(false);
    setIsPopupInfoOpenClose(false);
  };
  useEffect(() => {
    function handleESCclose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keydown", handleESCclose);
    return () => {
      document.removeEventListener("keydown", handleESCclose);
    };
  }, []);

  return (
    <div className="page">
      <Switch>
        <Route path="/" exact>
          <Main
            cards={data}
            onOpenLogin={openPopupLogin}
            isOpen={isPopupLoginOpen}
          />
        </Route>
        <Route>
          <SavedNews cards={saveData} path="/saved-news" />
        </Route>
      </Switch>
      <Footer />
      <PopupLogin
        isOpen={isPopupLoginOpen}
        onClose={closeAllPopups}
        onOpenAuth={openPopupAuth}
      />
      <PopupAuth
        isOpen={isPopupAuthOpen}
        onClose={closeAllPopups}
        onOpenLogin={openPopupLogin}
      />
      <PopupInfo
        isOpen={isPopupInfoOpenClose}
        onClose={closeAllPopups}
        onOpenLogin={openPopupLogin}
      />
    </div>
  );
}

export default App;
