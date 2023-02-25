import React, { useEffect, useRef } from "react";
// import useStore from "../store";
import { updateTodo } from "../service/todoService";

function EditingModal({ todo, setEditing }) {
  const [text, setText] = React.useState(todo.text);
  // const updateTodo = useStore((state) => state.updateTodo);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  handleSubmit = async () => {
    try {
      await updateTodo(todo.id, {
        text: text,
        finished: todo.finished,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const input = useRef(null);

  useEffect(() => {
    input.current.value = todo.text;
  }, []);

  return (
    <div className="flex flex-col items-center rounded-md bg-slate-800 p-3">
      <div>
        <input
          className="bg-slate-500 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-600"
          type="text"
          onInput={(e) => handleInput(e)}
          ref={input}
        />
      </div>
      <div className="items-center p-2 flex flex-row ">
        <div
          className="mr-1 px-3 py-2 bg-green-700 rounded cursor-pointer hover:bg-green-700/70 duration-200"
          onClick={() => {
            handleSubmit();
            console.log(todo);
            setEditing(false);
          }}
        >
          Save
        </div>
        <div
          className="ml-1 px-3 py-2 bg-indigo-600 rounded cursor-pointer hover:bg-indigo-600/60 duration-200 "
          onClick={() => setEditing(false)}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}

export default EditingModal;
