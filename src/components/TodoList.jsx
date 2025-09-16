import React, { useState } from "react";


export default function TodoList({ tasks, setTasks }) {

  // function handleClick(e) {
  //   setTasks([...tasks, !tasks.done])
  // }

  return (
    <div>
      <ul>
        {tasks.map((task, index) =>
          <li key={index}>
            <input type="checkbox"
              checked={task.done}
              onChange={(e) => {
                const updatedTasks = tasks.map((t, i) => i === index ? { ...t, done: e.target.checked } : t);
                setTasks(updatedTasks)

                console.log("click")
              }}>
            </input>
            <label style={task.done === true ? { textDecoration: "line-through" } : {}}>{task.text}</label>
            <div><p>date</p></div></li>)}
      </ul>
    </div>
  )
}