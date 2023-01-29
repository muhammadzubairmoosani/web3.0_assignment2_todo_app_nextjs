"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./modal.scss";

type Todo = {
  content: string;
  isCompleted: boolean;
  id: string;
} | null;

export const EditTodo = ({ todo }: { todo: Todo }) => {
  const { refresh: routerRefresh } = useRouter();
  const [modal, setModal] = useState<boolean>(false);
  const [todoState, setTodoState] = useState<Todo>(null);

  useEffect(() => {
    if (todoState === null) {
      setTodoState(todo);
    }
  }, []);

  const _editTodo = async () => {
    await fetch(
      `https://631ddaa7789612cd07b19f53.mockapi.io/todos/${todo?.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoState),
      }
    );

    routerRefresh();
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
            <button onClick={_editTodo}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};
