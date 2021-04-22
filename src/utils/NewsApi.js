const baseUrl = "https://nomoreparties.co/news/v2";
// const baseUrl = "https://newsapi.org/v2"
const apiKey = "8cbd8e7d874c48f1bfe7e1103fb142b8";
const date = new Date();
const timeStamp = date.setDate(date.getDate() - 7);
const newtimStamp = new Date(timeStamp);
const dateFrom =
  newtimStamp.getFullYear() +
  "-" +
  ("0" + (newtimStamp.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + newtimStamp.getDate()).slice(-2);
const dateNow =
  new Date().getFullYear() +
  "-" +
  ("0" + (new Date().getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + new Date().getDate()).slice(-2);

export const getArticles = (keyword) => {
  return fetch(
    `${baseUrl}/everything?language=ru&q=${keyword}&from=${dateFrom}&to=${dateNow}&pageSize=100&apiKey=${apiKey}`,
    {
      method: "GET",
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};
