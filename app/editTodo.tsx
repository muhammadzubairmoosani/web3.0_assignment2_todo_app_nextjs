"use client";

import { useEffect, useState } from "react";
import "./modal.scss";
import { Todo } from "./TodoList";

export const EditTodo = ({
  todo,
  setEdit,
}: {
  todo: Todo;
  setEdit: (p: Todo) => void;
}): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const [todoState, setTodoState] = useState<Todo | null>(null);

  useEffect(() => {
    if (todoState === null) {
      setTodoState(todo);
    }
  }, []);

  const onEdit = () => {
    setEdit(todoState);
    setModal(false);
  };
  return (
    <div>
      <button id="myBtn" onClick={() => setModal(!modal)}>
        Edit
      </button>
      {modal && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModal(!modal)}>
              &times;
            </span>
            <h2>Edit Todo</h2>
            <input
              type="text"
              value={todoState?.content}
              onChange={(e) =>
                setTodoState({ ...todoState, content: e.target.value })
              }
            />
            <button onClick={onEdit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};
