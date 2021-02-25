import React from "react";
import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PopupInfo from "../PopupInfo/PopupInfo";
// import data from "../../data/data.js";
import saveData from "../../data/savedata.js";
import * as mainApi from "../../utils/MainApi";
import * as newsApi from "../../utils/NewsApi";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [userData, setUserData] = React.useState({
    password: "",
    email: "",
    name: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [InLogged, setInLogged] = React.useState(false);
  const [isPopupLoginOpen, setIsPopupLoginOpen] = React.useState(false);
  const [isPopupAuthOpen, setIsPopupAuthOpen] = React.useState(false);
  const [isPopupInfoOpenClose, setIsPopupInfoOpenClose] = React.useState(false);
  const history = useHistory();
  React.useEffect(()=>{
    tokenCheck()
  }, [])
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
  React.useEffect(() => {
    if (InLogged) {
      const jwt = localStorage.getItem('jwt');
      mainApi
        .getUser(jwt)
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [InLogged]);
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
  const tokenCheck = () =>{
    const jwt = localStorage.getItem('jwt');
    if(jwt){
      mainApi.getUser(jwt)
      .then((res)=>{
        if(res.email){
          setUserData({
            email: res.email
          })
          setInLogged(true)
        }
      })
      .catch((err)=>{
        if (err === 401) {
          console.log('Токен не передан или передан не в том формате')
        }
        console.log('Переданный токен некорректен')
      })
    }
  }
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
  // выход и отчистка локального хранения
  const onSignOut = () =>{
    localStorage.removeItem('jwt')
    setUserData({
      email: ''
    })
    setInLogged(false);
    history.push('/')
  }
// поиск новостей
const searchNews = (keyword) =>{
  setIsLoading(true);
  newsApi.getArticles(keyword)
  .then((res) =>{ 
    const savedKeyword = res.articles.map((item) => {
      item.keyword = keyword
      return item
    })
    const dataArticles = savedKeyword.map((item) => ({
      keyword: item.keyword,
      title: item.title,
      text: item.description,
      date: item.publishedAt.slice(0, 10),
      source: item.source.name,
      link: item.url,
      image: item.urlToImage
    }))
    setData(dataArticles)
    localStorage.setItem('articles', JSON.stringify(res.articles))
   })
    .finally(setIsLoading(false))
}
// сохранение новостей

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/" exact>
            <Main
              registered={InLogged}
              data={data}
              onOpenLogin={openPopupLogin}
              isOpen={isPopupLoginOpen}
              onSignOut={onSignOut}
              isLoading={isLoading}
              searchNews={searchNews}
            />
          </Route>
          <Route>
            <SavedNews onSignOut={onSignOut} registered={InLogged} cards={saveData} path="/saved-news" />
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
