import React, { useState } from "react";

export default function TodoFilters() {

  return (
    <div>
      <select>
        <option>all</option>
        <option>deadline</option>
        <option>completed</option>
      </select>
      <select>
        <option>Added date</option>
        <option>deadline</option>
        <option>alphabetically</option>
      </select>
      <img src="" alt="reverse" />
    </div>
  )
}