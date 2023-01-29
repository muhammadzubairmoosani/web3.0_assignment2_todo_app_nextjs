"use client";

import { useRouter } from "next/navigation";

export const DeleteTodo = ({ todoId }: { todoId: string }): JSX.Element => {
  const { refresh: routerRefresh } = useRouter();

  const _deleteTodo = async () => {
    await fetch(`https://631ddaa7789612cd07b19f53.mockapi.io/todos/${todoId}`, {
      method: "DELETE",
    });
    routerRefresh();
  };

  return <button onClick={_deleteTodo}>Delete</button>;
};
