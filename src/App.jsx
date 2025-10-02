import { useState } from "react"
import Footer from "./components/Footer"
import TodoFilters from "./components/TodoFilters"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  console.log("1 -", localStorage.getItem("todos"))
  const [tasks, setTasks] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Added date")
  const [reverse, setReverse] = useState(false)

  return (
    <div className="flex flex-col h-full bg-gray-50 px-18 py-10">
      <div className="flex flex-col gap-14">
        <h1 className="flex justify-center text-4xl text-blue-600">My Todo</h1>
        <TodoInput tasks={tasks} setTasks={setTasks} />
      </div>
      <TodoFilters filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} reverse={reverse} setReverse={setReverse} />
      <TodoList tasks={tasks} setTasks={setTasks} filter={filter} sort={sort} setSort={setSort} reverse={reverse} />
      <Footer />
    </div>
  )
}

export default App
