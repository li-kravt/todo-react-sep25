import Footer from "./components/Footer"
import TodoFilters from "./components/TodoFilters"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  return (
    <>
      <h1>My Todo</h1>
      <TodoInput />
      <TodoFilters />
      <TodoList />
      <Footer />
    </>
  )
}

export default App
