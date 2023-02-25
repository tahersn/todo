import { useState } from "react";
import clsx from "clsx";
import useStore from "../store";
import { addTodo } from "../service/todoService";

function TodoInput() {
  const [focus, setFocus] = useState(false);
  // const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState("");
  const add = async () => {
    console.log(text);

    try {
      await addTodo({
        text: text,
        finished: false,
      });
      setText("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className={clsx(
        focus && "ring-2 ring-indigo-600 ",
        "duration-200 w-fit rounded-md flex "
      )}
    >
      <input
        type="text"
        className="rounded-l-md bg-gray-700  px-4 py-3 outline-none "
        value={text}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") add();
        }}
      />
      <button
        className="rounded-r-md px-4 py-3 bg-indigo-600 hover:bg-indigo-600/70 duration-200 cursor-pointer capitalize"
        onClick={() => add()}
      >
        add
      </button>
    </div>
  );
}

export default TodoInput;
