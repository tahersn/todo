import React from "react";

import useStore from "../store";

function Modal({ todo, setEditing, setShowModal }) {
  const removeTodo = useStore((state) => state.removeTodo);

  return (
    <div className="flex flex-col  w-32 z-10 rounded p-2 bg-slate-300 text-black">
      <div
        className="hover:bg-red-700 rounded-sm cursor-pointer"
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </div>
      <div
        className="hover:bg-indigo-700 rounded-sm"
        onClick={() => {
          setEditing(true);
          setShowModal(false);
        }}
      >
        Edit
      </div>
    </div>
  );
}

export default Modal;
