import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { TodoType } from "../types/types";
import Todo from "./Todo";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <div>
      {todos.map((todo: TodoType) => (
        <Todo key={todo.id} todoProps={todo} />
      ))}
    </div>
  );
}

export default TodoList;
