import { AddTodo } from "./addTodo";
import { TodoList } from "./TodoList";

const Page = async () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Page;
