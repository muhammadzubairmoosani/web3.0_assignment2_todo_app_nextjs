"use client";

import { useState, Fragment } from "react";
import { Todo } from "./TodoList";

export const AddTodo = ({
  setTodo,
}: {
  setTodo: (p: Todo) => void;
}): JSX.Element => {
  const [content, setContent] = useState<string>("");

  const addTodo = async () => {
    setTodo({
      content,
      isCompleted: false,
      id: Date.now(),
    });
    setContent("");
  };

  return (
    <Fragment>
      <input
        type="text"
        value={content}
        onChange={(e: { target: { value: string } }) =>
          setContent(e.target.value)
        }
      />
      <button disabled={!content} onClick={addTodo}>
        Add
      </button>
    </Fragment>
  );
};
