import { json } from "react-router-dom";

const baseUrl = "http://localhost:3001";
function getItems() {
  return fetch(`${baseUrl}/items`, {
    Headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
  });
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
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
  });
};

const removeItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    Headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
  });
};

const api = {
  getItems,
  addItem,
  removeItem,
};

export default api;
export { getItems };
