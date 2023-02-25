import axios from "axios";

const url = "http://localhost:3000/todos";

export const getTodos = async () => {
  return axios.get(url);
};

export const addTodo = async (todo) => {
  return axios.post(url, todo);
};

export const updateTodo = async (id, todo) => {
  return axios.put(`${url}/${id}`, todo);
};
