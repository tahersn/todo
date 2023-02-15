import React, { useState } from "react";
import { BsCheck, BsThreeDots } from "react-icons/bs";
import Modal from "./modal";
import useStore from "../store";
import clsx from "clsx";
import EditingModal from "./EditingModal";

function Todo({ todo }) {
  const [showModal, setShowModal] = React.useState(false);
  const [Editing, setEditing] = React.useState(false);
  const [finished, setFinished] = useState(false);

  return (
    <div
      className={
        finished
          ? "flex  relative justify-around opacity-70"
          : "flex  relative justify-around"
      }
      onDoubleClick={() => setFinished(!finished)}
    >
      <div className="bg-gray-700 px-4 py-3 cursor-pointer rounded-md hover:bg-gray-700/80 flex flex-row justify-between items-center flex-grow">
        <div>{todo.text}</div>
        <div className={clsx(showModal && "rotate-90", "duration-200")}>
          {finished ? (
            <div className="text-emerald-500">
              <BsCheck></BsCheck>
            </div>
          ) : (
            <BsThreeDots onClick={() => setShowModal(!showModal)} />
          )}
        </div>
      </div>

      {showModal && (
        <div className="absolute  -right-[9rem] ">
          <Modal
            todo={todo}
            setEditing={setEditing}
            setShowModal={setShowModal}
          />
        </div>
      )}
      <div className="absolute z-10 -top-9">
        {Editing && <EditingModal todo={todo} setEditing={setEditing} />}
      </div>
    </div>
  );
}

export default Todo;
