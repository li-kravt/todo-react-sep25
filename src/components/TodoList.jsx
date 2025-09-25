import React, { useState } from "react";


export default function TodoList({ tasks, setTasks, filter, sort, reverse }) {

  function sortTasks(list) {
    list.sort((a, b) => {
      if (sort == "Added date") {
        reverse ? b.id - a.id : a.id - b.id
      }
      if (sort == "Deadline") {
        reverse ? b.timeStamp - a.timeStamp : a.timeStamp - b.timeStamp
      }
      if (sort === "Alphabetically") {
        reverse ? b.text.localeCompare(a.text) : a.text.localeCompare(b.text)
      }
      return
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

  return (
    <div>
      <ul>
        {console.log("filterSortVisibleTasks:", filterSortVisibleTasks())}
        {items.map((task) =>
          <li key={task.id}>
            <input type="checkbox"
              checked={task.done}
              onChange={(e) => {

                const updatedTasks = tasks.map((t) => t.id === task.id ? { ...t, done: e.target.checked } : t);
                setTasks(updatedTasks)

                console.log("click")
              }}>
            </input>
            <label style={task.done === true ? { textDecoration: "line-through" } : {}}>{task.text}</label>
            <div><p>{task.date}</p></div></li>)}
      </ul>
    </div>
  )
}
