import React from "react";

function EditingModal({ todo, setEditing }) {
  const [text, setText] = React.useState(todo.text);
  return (
    <div className="flex flex-col items-center rounded-md bg-slate-600 p-3">
      <div>
        <input
          type="text"
          value={todo.text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button>Save</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default EditingModal;
