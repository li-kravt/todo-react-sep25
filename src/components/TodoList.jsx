import React, { useState } from "react";


export default function TodoList({ tasks, setTasks, filter }) {
  const visibleTasks = tasks.filter(t => {
    if (filter === "All") return t
    if (filter === "Deadline") return t.date !== ""
    if (filter === "Completed") return t.done === true
  })


  return (
    <div>
      <ul>
        {visibleTasks.map((task, index) =>
          <li key={task.id}>
            <input type="checkbox"
              checked={task.done}
              onChange={(e) => {

                const updatedTasks = tasks.map((t, i) => i === task.id ? { ...t, done: e.target.checked } : t);
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