"use client"
import React, { useState } from "react"

const page = ()=>{
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('')

  const addTask = (e)=>{
    e.preventDefault()
    console.log(title, task)
    setTitle('')
    setTask('')
  }

  return (
    <div>
      <h1 className="bg-gray-900 text-white px-20 p-6 text-4xl font-bold ">My To Do List</h1>
      <form onSubmit={addTask} className="px-15 items-center">
        <input type="text"
        className="text-2xl border-zinc-800 bg-white text-black border-2 m-5 px-3 py-4 rounded"
        placeholder="Enter new task"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <br />
        <input type="text"
        className="text-2xl border-zinc-800 bg-white text-black border-2 m-5 px-3 py-4 rounded"
        placeholder="Enter description"
        value={task}
        onChange={(e)=>{
          setTask(e.target.value)
        }}/>
        <br />
        <button className="bg-zinc-600 m-5 px-6 py-4 text-2xl rounded">Add Task</button>
        
      </form>
    </div>
  )
}

export default page