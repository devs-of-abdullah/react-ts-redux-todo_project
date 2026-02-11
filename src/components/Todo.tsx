import { IoIosRemoveCircleOutline } from "react-icons/io";
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
      <div style={{marginLeft:"10px"}}>{content}</div>
      <div>
        <IoIosRemoveCircleOutline onClick={handleRemoveTodo} className="icons" style={{marginRight:"10px"}} />
        
      </div>
    </div>
  );
}

export default Todo;
