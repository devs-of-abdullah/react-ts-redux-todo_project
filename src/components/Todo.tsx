import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import type { TodoType } from "../types/types";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  return (
    <div className="todo">
      <div>{content}</div>
      <div>
        <IoIosRemoveCircleOutline className="icons" />
        <FaEdit className="icons" style={{ marginRight: "8px" }} />
      </div>
    </div>
  );
}

export default Todo;
