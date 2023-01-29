import { ReactElement } from "react";
import { CompletedTodo } from "./completedTodo";
import { DeleteTodo } from "./deleteTodo";
import { EditTodo } from "./editTodo";

type Todos = {
  content: string;
  isCompleted: boolean;
  id: string;
  imgUrl: string;
};

const getTodos = async () => {
  const todos = await fetch(
    "https://631ddaa7789612cd07b19f53.mockapi.io/todos/"
  );
  return todos.json();
};

export const TodoList: any = async (): Promise<ReactElement> => {
  const todos: Todos[] = await getTodos();
  return (
    <table>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>
              <CompletedTodo todoId={todo.id} isCompleted={todo.isCompleted} />
            </td>
            <td>{todo.content}</td>
            <td>
              <EditTodo todo={todo} />
            </td>
            <td>
              <DeleteTodo todoId={todo.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
