import React, { useState } from "react";


export default function TodoList({ tasks, setTasks, filter, sort }) {


  function filterSortVisibleTasks() {
    let visibleTasks = []

    if (filter == "All") {
      visibleTasks = [...tasks].sort((a, b) => {
        if (sort == "Added date") {
          return a.id - b.id
        }
        if (sort == "Deadline") {
          return b.timeStamp - a.timeStamp
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