const URL = "http://localhost:3000/v1";

export const register = (data, callback) => {
  fetch(`${URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const login = (data, callback) => {
  fetch(`${URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const addData = (data, callback) => {
  fetch(`${URL}/article`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("blog_token"),
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const getStores = (pageNum, callback) => {
  fetch(`${URL}/stores?s=4&p=${pageNum}`, {
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("user_token"),
    },
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const getOneData = (id, callback) => {
  fetch(`${URL}/article/${id}`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};
