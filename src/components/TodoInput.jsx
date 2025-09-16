import React, { useState } from "react";

export default function TodoInput({ tasks, setTasks }) {
  const [text, setText] = useState("")

  function handleClick() {
    setTasks([...tasks, text])
    setText("")
    console.log(tasks)
  }

  return (
    <div className="flex flex-col">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add new ..." />
      <img
        src=""
        alt="choose date"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}