import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import type { TodoType } from "../types/types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/slices/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
 const dispatch = useDispatch();
    const { id, content } = todoProps;
        const handleRemoveTodo= () =>{
            dispatch(removeTodoById(id))
        }
  return (
    <div className="todo">
      <div>{content}</div>
      <div>
        <IoIosRemoveCircleOutline onClick={handleRemoveTodo} className="icons" />
        <FaEdit className="icons" style={{ marginRight: "8px" }} />
      </div>
    </div>
  );
}

export default Todo;
