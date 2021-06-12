 const BASE_URL = 'https://news-explorerser.herokuapp.com/'
// const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000' || '//news-explorerser.herokuapp.com/'}`
const checkResponse = (res) =>
  new Promise((resolve, reject) => {
    const func = res.status < 400 ? resolve : reject;
    return func(res.json());
  });

export const getUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email, name }),
  }).then(checkResponse);

  // .then((res) => {
  //   if (res.ok) {
  //     return res.json();
  //   }
  //   return Promise.reject(res.status);
  // });
};
export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};
export const createArticle = (data) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      keyword: data.keyword,
      title: data.title,
      text: data.text,
      date: data.date,
      source: data.source,
      link: data.link,
      image: data.image,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};
export const getArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
export const deleteArticles = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
