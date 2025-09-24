import React, { useState } from "react";

export default function TodoFilters({ filter, setFilter, sort, setSort }) {

  return (
    <div className="flex justify-end px-80 gap-10 my-4">
      <div className="flex flex-row gap-2 items-center justify-center">
        <label className="font-light">Filter: </label>
        <select className="flex items-center justify-center bg-white p-1 rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Deadline</option>
          <option>Completed</option>
        </select>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <label className="font-light">Sort: </label>
        <select className="flex items-center justify-center bg-white p-1 rounded-md"
          value={sort}
          onChange={(e) => setSort(e.target.value)}>
          <option>Added date</option>
          <option>Deadline</option>
          <option>Alphabetically</option>
        </select>
      </div>
      <img src="/img/sort.svg" alt="reverse" className="cursor-pointer" />
    </div>
  )
}