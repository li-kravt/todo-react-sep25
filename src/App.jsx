import { useState } from "react"
import Footer from "./components/Footer"
import TodoFilters from "./components/TodoFilters"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <h1>My Todo </h1>
      <TodoInput tasks={tasks} setTasks={setTasks} />
      <TodoFilters />
      <TodoList tasks={tasks} />
      <Footer />
    </>
  )
}

export default App
