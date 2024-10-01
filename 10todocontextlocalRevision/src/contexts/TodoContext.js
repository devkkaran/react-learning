import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo:"ToDO MSG",
            completed: false 
        }
    ],
    addToDo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {}


})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext);
}