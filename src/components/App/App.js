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
import ProtectedRoute from "../ProtectedRoute";
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
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [InLogged, setInLogged] = React.useState(false);
  const [isPopupLoginOpen, setIsPopupLoginOpen] = React.useState(false);
  const [isPopupAuthOpen, setIsPopupAuthOpen] = React.useState(false);
  const [isPopupInfoOpenClose, setIsPopupInfoOpenClose] = React.useState(false);
  const history = useHistory();
  React.useEffect(() => {
    tokenCheck();
  }, []);
  const openPopupLogin = () => {
    setIsPopupInfoOpenClose(false);
    setIsPopupAuthOpen(false);
    setIsPopupLoginOpen(true);
  };
  function openPopupAuth() {
    setIsPopupAuthOpen(true);
    setIsPopupLoginOpen(false);
  }
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
      const jwt = localStorage.getItem("jwt");
      const promise = [mainApi.getUser(jwt), mainApi.getArticles()];
      Promise.all(promise)
        .then(([dataUser, articles]) => {
          setCurrentUser(dataUser);
          setSavedArticles(articles);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const findArticles = localStorage.getItem("articles");
    setData(JSON.parse(findArticles));
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
        console.log(err);
      });
  };

  // проверка токена
  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getUser(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setInLogged(true);
          }
        })
        .catch((err) => {
          if (err === 401) {
            console.log("Токен не передан или передан не в том формате");
          }
          console.log("Переданный токен некорректен");
        });
    }
  };
  // Авторизация пользователя
  const onLogin = (email, password) => {
    mainApi
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setUserData({
            email: data.email,
            password: data.password,
          });
          setInLogged(true);
          localStorage.removeItem("articles");
        }
        setIsPopupAuthOpen(false)
      })
      .catch((err) => {
        console.log(err);
       
      });
  };
  // выход и отчистка локального хранения
  const onSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("articles");
    setUserData({
      email: "",
    });
    setInLogged(false);
    history.push("/");
  };
  // поиск новостей
  const searchNews = (keyword) => {
    setIsLoading(true);
    newsApi
      .getArticles(keyword)
      .then((res) => {
        const savedKeyword = res.articles.map((item) => {
          item.keyword = keyword;
          return item;
        });
        const dataArticles = savedKeyword.map((item) => ({
          keyword: item.keyword,
          title: item.title,
          text: item.description,
          date: item.publishedAt.slice(0, 10),
          source: item.source.name,
          link: item.url,
          image: item.urlToImage,
        }));
        setData(dataArticles);
        localStorage.setItem("articles", JSON.stringify(dataArticles));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setIsLoading(false));
  };
  // сохранение новостей
  const onSave = (card) => {
    mainApi
      .createArticle(card)
      .then((newData) => {
        const saved = data.map((item) => {
          if (item.link === newData.link) {
            item._id = newData._id;
          }
          return item;
        });
        console.log(saved);
        localStorage.removeItem("articles");
        setData(saved);
        setSavedArticles([newData, ...savedArticles]);
        localStorage.setItem("articles", JSON.stringify(saved));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Удаление новостей
  const onDelete = (card) => {
    return mainApi
      .deleteArticles(card._id)
      .then((res) => {
        const delSaveArticles = data.map((item) => {
          if (item._id === res._id) {
            item._id = null;
          }
          return item;
        });
        const delArticles = savedArticles.filter((c) => c._id !== card._id);
        setData(delSaveArticles);
        localStorage.setItem("articles", JSON.stringify(delSaveArticles));
        setSavedArticles(delArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/" exact>
            <Main
              registered={InLogged}
              data={data}
              onOpenLogin={openPopupLogin}
              openPopupAuth={openPopupAuth}
              isOpen={isPopupLoginOpen}
              onSignOut={onSignOut}
              isLoading={isLoading}
              searchNews={searchNews}
              onSave={onSave}
              onDelete={onDelete}
            />
          </Route>
          <ProtectedRoute
            exact
            path="/saved-news"
            InLogged={InLogged}
            component={SavedNews}
            onSignOut={onSignOut}
            registered={InLogged}
            data={savedArticles}
            onDelete={onDelete}
          />
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
