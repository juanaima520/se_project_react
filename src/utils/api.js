import { json } from "react-router-dom";

const baseUrl = "http://localhost:3001";
function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
}
function getItems() {
  return fetch(`${baseUrl}/items`, {
    Headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    Headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(checkResponse);
};

const removeItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    Headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

export { getItems, addItem, removeItem, checkResponse };
