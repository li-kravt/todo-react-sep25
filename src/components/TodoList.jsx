import React, { useState } from "react";


export default function TodoList({ tasks, setTasks, filter, sort, reverse }) {


  function filterSortVisibleTasks() {
    let visibleTasks = []

    if (filter == "All") {
      visibleTasks = [...tasks].sort((a, b) => {
        if (sort == "Added date") {
          if (reverse) {
            return b.id - a.id
          } else {
            return a.id - b.id
          }
        }
        if (sort == "Deadline") {
          if (reverse) {
            return b.timeStamp - a.timeStamp
          }
          return a.timeStamp - b.timeStamp
        }
        if (sort === "Alphabetically") {
          if (reverse) {
            return b.text.localeCompare(a.text)
          }
          return a.text.localeCompare(b.text)
        }
        return visibleTasks
      }
      )
    }
    return visibleTasks


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