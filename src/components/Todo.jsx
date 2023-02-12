import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Modal from "./modal";
import useStore from "../store";
import clsx from "clsx";
import EditingModal from "./EditingModal";

function Todo({ todo }) {
  const [showModal, setShowModal] = React.useState(false);
  const [Editing, setEditing] = React.useState(false);

  return (
    <div className="flex flex-row  relative justify-around">
      <div className="bg-gray-700 px-4 py-3 cursor-pointer rounded-md hover:bg-gray-700/80 flex flex-row justify-between items-center flex-grow">
        <div>{todo.text}</div>
        <div className={clsx(showModal && "rotate-90", "duration-200")}>
          <BsThreeDots onClick={() => setShowModal(!showModal)} />
        </div>
      </div>

      {showModal && (
        <div className="absolute  -right-[9rem] ">
          <Modal todo={todo} setEditing={setEditing} />
        </div>
      )}
      <div className="absolute z-10 -top-9">
        {Editing && <EditingModal todo={todo} setEditing={setEditing} />}
      </div>
    </div>
  );
}

export default Todo;
