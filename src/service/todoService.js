const url = "http://localhost:3000/todos";

export const getTodos = async () => {
  const response = await fetch(url);
  console.log(response);

  return response.json();
};

export const addTodo = async (todo) => {
  const response = await fetch(url, {
    mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  return response.json();
};
