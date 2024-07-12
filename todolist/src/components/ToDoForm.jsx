import React, { useState } from 'react'
import useTodo from '../context/ToDoContext';

function TodoForm() {
    const [todo,setToDo]=useState("");
    const {addToDo}=useTodo();
    const add=(e)=>{
        e.preventDefault();
        if(!todo) return;
        addToDo({todo,completed:false})
        setToDo("")
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e)=>{setToDo(e.target.value)}}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

