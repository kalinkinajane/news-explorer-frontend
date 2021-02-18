import React from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PopupInfo from "../PopupInfo/PopupInfo";
import data from "../../data/data.js";
import saveData from "../../data/savedata.js";
import * as mainApi from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [userData, setUserData] = React.useState({
    password: "",
    email: "",
    name: "",
  });

  const [InLogged, setInLogged] = React.useState(false);
  const [isPopupLoginOpen, setIsPopupLoginOpen] = React.useState(false);
  const [isPopupAuthOpen, setIsPopupAuthOpen] = React.useState(false);
  const [isPopupInfoOpenClose, setIsPopupInfoOpenClose] = React.useState(false);
  // const [isPopupInfoOpenClose, setIsPopupInfoOpenClose] = React.useState(true);
  //Раскомментировать чтоб увидеть попап инфо
  const openPopupLogin = () => {
    setIsPopupInfoOpenClose(false);
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

  // загрузка начальных данных
  // React.useEffect(() => {
  //   if (InLogged) {
  //     mainApi
  //       .getUser()
  //       .then((data) => {
  //         setCurrentUser(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [InLogged]);
  // Регистрация пользователя
  const onRegister = (password, email, name) => {
    mainApi
      .register(password, email, name)
      .then((data) => {
        setUserData({
          password: data.password,
          email: data.email,
          name: data.name,
        });
        closeAllPopups();
        setIsPopupInfoOpenClose(true);
      })
      .catch((err) => {
        console.log({ err });
      });
  };
 
  // проверка токена
  
   // Авторизация пользователя
   const onLogin = (email, password)=>{
     mainApi.authorize(email, password)
    .then((data)=>{
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        setUserData({
          email: data.email,
          password: data.password
        })
        setInLogged(true)
      }
    })
   }
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/" exact>
            <Main
              registered={InLogged}
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
        <Login
          isOpen={isPopupLoginOpen}
          onClose={closeAllPopups}
          onOpenAuth={openPopupAuth}
          onLogin={onLogin}
        />
        <Register
          isOpen={isPopupAuthOpen}
          onClose={closeAllPopups}
          onOpenLogin={openPopupLogin}
          onRegister={onRegister}
        />
        <PopupInfo
          isOpen={isPopupInfoOpenClose}
          onClose={closeAllPopups}
          onOpenLogin={openPopupLogin}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
