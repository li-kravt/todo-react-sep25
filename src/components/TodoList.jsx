import React, { useState } from "react";


export default function TodoList({ tasks }) {

  return (
    <div>
      <ul>
        {tasks.map((task, index) => <li key={index}> <input type="checkbox"></input> <label>{task}</label> <div><p>date</p></div></li>)}
      </ul>
    </div>
  )
}