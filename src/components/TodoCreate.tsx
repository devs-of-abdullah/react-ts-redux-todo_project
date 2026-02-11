import React, { useState } from "react";
import { useDispatch} from "react-redux"
import type { TodoType } from "../types/types";
import { createTodo } from "../redux/slices/todoSlice";

function TodoCreate() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");
    const handleCreateTodo = () =>{
        if(newTodo.trim().length == 0){
            alert("Enter To Do")
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random()* 999999),
            content : newTodo,
        }
        dispatch(createTodo(payload));
        setNewTodo("");
    }
  return (
    <div className='todo-create'>
      <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} value={newTodo} placeholder="Enter Todo..." className="todo-create-input" type='text' />
      <button onClick={handleCreateTodo} className="todo-create-button">Create</button>
    </div>
  )
}  

export default TodoCreate
