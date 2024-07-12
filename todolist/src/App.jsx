import { useEffect, useState } from 'react'
import './App.css'
import { ToDoContextProvider } from './context/ToDoContext'
import TodoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';
function App() {
  const [todos,setToDos]=useState([])
  const addToDo=(todo)=>{ //todo is a single item in todos
    setToDos((prev)=>[{id:Date.now() ,...todo},...prev])
  };
  const updateToDo=(id,todo)=>{
    setToDos((prev)=>prev.map((prevToDo)=>(prevToDo.id===id ? todo : prevToDo)))
  }
  const deleteToDo=(id)=>{
    setToDos((prev)=>prev.filter((prevToDo)=>(prevToDo.id!==id)))
  }
  const completedToDo=(id)=>{
    setToDos((prev)=>prev.map((prevToDo)=>prevToDo.id===id?{...prevToDo,completed: !(prevToDo.completed)}:prevToDo))
  }
    //#   If the id matches, we use the spread operator (...todo) to create a new object that contains all the properties 
    //   of the existing todo item.
    //# We then override the completed property with its negated value (!todo.completed), effectively toggling its status.
    //# This creates a new object with the updated completed status.

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos')) //const any_name=JSON.parse........
    if(todos && todos.length>0) setToDos(todos) //if(any_name && any_name.length)>0 setToDos(any_name)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos)) //stringify(todos)
  },[todos])
  return (
    <ToDoContextProvider value={{todos,addToDo,updateToDo,deleteToDo,completedToDo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */} 
              <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo)=>(
                <div key={todo.id} className='w-full'> {/*while looping we use key for optimisation */}
                  <ToDoItem todo={todo}/>
                </div>
              ))}
            </div>
          </div>
        </div>
    </ToDoContextProvider>
  )
}

export default App
