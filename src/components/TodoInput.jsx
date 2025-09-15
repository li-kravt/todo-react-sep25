import React, { useState } from "react";

export default function TodoInput() {

  return (
    <div className="flex flex-col">
      <input type="text" placeholder="Add new ..." />
      <img
        src=""
        alt="choose date"
      />
      <button>Add</button>
    </div>
  )
}