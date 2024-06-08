
import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'

function App() {
  const [todos, setTodos]=useState([])

  const createTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo}, ...prev])
  }
 

  return (
    <TodoProvider value={{todos, deteteTodo, createTodo, updateTodo, toggleComplete}}>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </TodoProvider>
  )
}

export default App
