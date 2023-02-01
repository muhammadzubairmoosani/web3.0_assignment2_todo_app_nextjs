"use client";

import { Fragment, useState } from "react";
import { AddTodo } from "./addTodo";
import { CompletedTodo } from "./completedTodo";
import { DeleteTodo } from "./deleteTodo";
import { EditTodo } from "./editTodo";

export type Todo = {
  content: string;
  isCompleted: boolean;
  id: number;
};

export const TodoList = (): JSX.Element => {
  const [todos, setTodo] = useState<Todo[] | []>([]);

  const _setTodo = (todo: Todo) => {
    todo.id = todos.length;
    setTodo([...todos, todo]);
  };

  const edit = (todo: Todo) => {
    const newTodo = todos.filter(
      (_todo: { id: number }) => _todo.id !== todo.id
    );
    newTodo.splice(todo.id, 0, todo);
    setTodo(newTodo);
  };

  const onDelete = (id: number) => {
    todos.splice(id, 1);
    setTodo(todos);
  };

  const completed = (todo: Todo) => {
    let newTodos = todos.filter(
      (_todo: { id: number }) => _todo.id !== todo.id
    );
    newTodos.splice(todo.id, 0, todo);
    setTodo(newTodos);
  };

  return (
    <Fragment>
      <AddTodo setTodo={_setTodo} />
      <table>
        <tbody>
          {!todos.length
            ? "Add your first todo"
            : todos.map((todo: Todo) => (
                <tr key={todo.id}>
                  <td>
                    <CompletedTodo setCompleted={completed} todo={todo} />
                  </td>
                  <td>{todo.content}</td>
                  <td>
                    <EditTodo setEdit={edit} todo={todo} />
                  </td>
                  <td>
                    <DeleteTodo onDelete={() => onDelete(todo.id)} />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};
