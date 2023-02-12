import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex justify-center flex-col items-center">
      <div className="">
        
        <TodoInput />
        <div className="mt-5"><TodoList/></div>
      </div>
    </div>
  )
}

export default App
