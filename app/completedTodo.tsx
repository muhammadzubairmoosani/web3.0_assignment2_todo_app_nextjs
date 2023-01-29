"use client";

import { useRouter } from "next/navigation";
type CompletedTodoType = { todoId: string; isCompleted: boolean };

export const CompletedTodo = ({
  todoId,
  isCompleted,
}: CompletedTodoType): JSX.Element => {
  const { refresh: routerRefresh } = useRouter();

  const _completedTodo = async () => {
    await fetch(`https://631ddaa7789612cd07b19f53.mockapi.io/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: !isCompleted }),
    });

    routerRefresh();
  };

  return (
    <input
      type="checkbox"
      readOnly
      checked={isCompleted}
      onClick={_completedTodo}
    />
  );
};
