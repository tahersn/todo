import React from "react";
import Todo from "./Todo";
import useStore  from "../store";

function TodoList() {
  const todos = useStore((state) => state.todos);
  return (
    <div className="space-y-3 items-center justify-center">
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
