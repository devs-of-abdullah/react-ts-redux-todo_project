import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Todo() {
  return (
    <div className="todo">
      <div>First todo</div>
      <div>
        <IoIosRemoveCircleOutline
          className="icons"
         
        />
        <FaEdit className="icons" style={{ marginRight: "8px" }} />
      </div>
    </div>
  );
   
}

export default Todo;
