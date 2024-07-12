import { createContext, useContext } from "react";

export const ToDoContext=createContext({
    todos:[
        {
            id:1,
            todo:"msg",
            completed:false,
        },
    ],
    addToDo:(todo)=>{},
    updateToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
    completedToDo:(id)=>{},
});

export const ToDoContextProvider=ToDoContext.Provider;

export default function useTodo(){
    return useContext(ToDoContext);
};