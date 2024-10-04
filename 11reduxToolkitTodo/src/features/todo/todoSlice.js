import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo", // aa "name" in-built che nake apde apelu
  initialState, // aa "initialState" in-built che nake apde apelu
  reducers: {
    // ama property ane function ave che

    // Context api ma aapne function khale declare karta hata pn ahi apne tene define pnarishu reducers ni andar
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload

        // payload ak Object che jeni andar tame id aapeli che
      };
      state.todos.push(todo)
    },
    // state: aa initial state ni present value nu access ape che
    // action : jyare method ni andar value je add kari te action ma thi thase
    removeTodo: (state, action) => {
        state.todos = state.todos.filter( (todo) => todo.id !== action.payload)
    },
  },
});

export const {addTodo, removeTodo} = todoSlice.actions  // aa function component ni andar use kari sakase

export default todoSlice.reducer // aa karyu kem ke store ne aware karshu ke reducer ni andar aa method che 
