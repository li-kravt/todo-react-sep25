import React, { useState } from "react";

export default function TodoInput({ tasks, setTasks }) {
  const [text, setText] = useState("")

  function handleClick() {
    if (text === "") {
      return
    }
    setTasks([...tasks, { text: text, done: false }])
    setText("")
    console.log(tasks)
  }

  return (
    <div className="flex flex-row h-16 w-220 p-4 items-center justify-between bg-white rounded-xl">
      <input className="flex w-180" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add new ..." />
      <div className="flex justify-center items-center gap-4">
        <img className="w-h h-6 cursor-pointer"
          src="img/calendar.svg"
          alt="choose date"
        />
        <button className="flex items-center justify-center p-3 bg-blue-600 text-white leading-none rounded-sm cursor-pointer" onClick={handleClick}>Add</button>
      </div>
    </div>
  )
}