import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TodoInitialState, TodoType } from "../../types/types";

const initialState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
    },

    removeTodoById: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (todo: TodoType) => todo.id !== action.payload,
      );
    },
  },
});

export const { createTodo, removeTodoById } = todoSlice.actions;
export default todoSlice.reducer;
