import { useContext } from "react";
import { createContext } from "react";

//create Context
export const TodoContext = createContext({
    todos:[
        {
        id:1,
        message:"craete a todo",
        completed:false
        }
],
    createTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deteteTodo : (id) => {},
    toggleComplete: (id) ={}
})

//Costom Hock

export const useTodo = () => {
    return useContext(TodoContext)
}

// Context provider

export const TodoProvider = TodoContext.Provider