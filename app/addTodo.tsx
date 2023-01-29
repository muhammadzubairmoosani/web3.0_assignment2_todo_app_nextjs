"use client";

import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";

export const AddTodo = (): JSX.Element => {
  const [content, setContent] = useState<string>("");
  const { refresh: routerRefresh } = useRouter();

  const _addTodo = async () => {
    const response = await fetch(
      `https://631ddaa7789612cd07b19f53.mockapi.io/todos/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      }
    );
    const success = await response.json();

    if (success) {
      routerRefresh();
      setContent("");
    }
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
      <button disabled={!content} onClick={_addTodo}>
        Add
      </button>
    </Fragment>
  );
};
