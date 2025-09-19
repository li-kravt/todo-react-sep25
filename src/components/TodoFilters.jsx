import React, { useState } from "react";

export default function TodoFilters() {

  return (
    <div className="flex justify-end px-80 gap-10 my-4">
      <div className="flex flex-row gap-2 items-center justify-center">
        <label className="font-light">Filter: </label>
        <select className="flex items-center justify-center bg-white p-1 rounded-md">
          <option>All</option>
          <option>deadline</option>
          <option>completed</option>
        </select>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <label className="font-light">Sort: </label>
        <select className="flex items-center justify-center bg-white p-1 rounded-md">
          <option>Added date</option>
          <option>deadline</option>
          <option>alphabetically</option>
        </select>
      </div>
      <img src="/img/sort.svg" alt="reverse" className="cursor-pointer" />
    </div>
  )
}