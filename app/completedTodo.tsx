"use client";

import { Todo } from "./TodoList";

type CompletedTodoType = {
  todo: Todo;
  setCompleted: (id: Todo) => void;
};

export const CompletedTodo = ({
  todo,
  setCompleted,
}: CompletedTodoType): JSX.Element => {
  return (
    <input
      type="checkbox"
      readOnly
      checked={todo.isCompleted}
      onClick={() => {
        todo.isCompleted = !todo.isCompleted;
        setCompleted(todo);
      }}
    />
  );
};
