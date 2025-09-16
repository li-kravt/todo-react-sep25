import React, { useState } from "react";


export default function TodoList({ tasks }) {

  return (
    <div>
      <ul>
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
      </ul>
    </div>
  )
}