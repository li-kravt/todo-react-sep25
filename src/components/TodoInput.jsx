import React, { useState } from "react";

export default function TodoInput({ tasks, setTasks }) {
  const [text, setText] = useState("")
  const [date, setDate] = useState("")
  const [timeStamp, setTimeStamp] = useState(0)

  function handleClick() {
    if (text === "") {
      return
    }
    setTasks([...tasks, { id: Date.now(), text: text, date: date, timeStamp: timeStamp, done: false }])
    setText("")
    console.log(tasks)
    setDate("")
    setTimeStamp(0)
  }

  function handleChange(e) {
    setDate(e.target.value)
    setTimeStamp(e.target.valueAsNumber)
  }

  return (
    <div className="flex flex-row h-16 w-full p-4 items-center justify-between bg-white rounded-xl">
      <input className="flex w-180" type="text" value={text} onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        placeholder="Add new ..." />
      <div className="flex justify-center items-center gap-4">
        <input type="date" className="w-h h-6 cursor-pointer"
          src="img/calendar.svg"
          alt="choose date"
          value={date}
          onChange={(e) => handleChange(e)}
        />
        {/* добавила календарь в инпуте если что, дальше над ним работаю */}
        <button className="flex items-center justify-center p-3 bg-blue-600 text-white leading-none rounded-sm cursor-pointer"
          onClick={handleClick}
        >Add</button>
      </div>
    </div>
  )
}