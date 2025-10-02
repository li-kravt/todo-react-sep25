export default function TodoList({ tasks, setTasks, filter, sort, reverse }) {

  function sortTasks(list) {
    list.sort((a, b) => {
      if (sort == "Added date") {
        return reverse ? a.id - b.id : b.id - a.id
      }
      if (sort == "Deadline") {
        return reverse ? b.timeStamp - a.timeStamp : a.timeStamp - b.timeStamp
      }
      if (sort === "Alphabetically") {
        return reverse ? b.text.localeCompare(a.text) : a.text.localeCompare(b.text)
      }
      return 0
    })
  }

  function filterSortVisibleTasks() {
    let visibleTasks = []

    if (filter == "All") {
      visibleTasks = [...tasks]
    }

    if (filter == "Deadline") {
      visibleTasks = [...tasks].filter(task => task.date)
    }

    if (filter == "Completed") {
      visibleTasks = [...tasks].filter(task => task.done)
    }

    sortTasks(visibleTasks)
    return visibleTasks.sort((a, b) => a.done - b.done)
  }

  const items = filterSortVisibleTasks()
  const removedTasks = []

  function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    const updatedTasks = [...tasks];
    removedTasks.push(updatedTasks.splice(index, 1))
    setTasks(updatedTasks);
    localStorage.setItem("todos", JSON.stringify(tasks))
  }

  return (
    <div>
      <ul>
        {items.map((task) =>
          <li key={task.id}
            className="flex items-center justify-between p-2 border-b-2 border-gray-200">
            <div className="flex items-center justify-left gap-2">
              <input type="checkbox"
                checked={task.done}
                onChange={(e) => {
                  const updatedTasks = tasks.map((t) => t.id === task.id ? { ...t, done: e.target.checked } : t);
                  setTasks(updatedTasks)
                }}>
              </input>
              <label style={task.done === true ? { textDecoration: "line-through" } : {}}>{task.text}</label>
            </div>
            <div className="flex justify-end items-center gap-4">
              <div className="flex items-center"><p>{task.date}</p></div>
              <button className=" flex items-center text-red-700 cursor-pointer"
                onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>)}

      </ul>
    </div>
  )
}
