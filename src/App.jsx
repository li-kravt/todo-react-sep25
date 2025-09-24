import { useState } from "react"
import Footer from "./components/Footer"
import TodoFilters from "./components/TodoFilters"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Added date")


  return (
    <div className="flex flex-col h-full bg-gray-50 px-18 py-10">
      <div className="flex flex-col gap-14">
        <h1 className="flex justify-center text-4xl text-blue-600">My Todo</h1>
        <TodoInput tasks={tasks} setTasks={setTasks} />
      </div>
      <TodoFilters filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <TodoList tasks={tasks} setTasks={setTasks} filter={filter} sort={sort} setSort={setSort} />
      <Footer />
    </div>
  )
}

export default App
