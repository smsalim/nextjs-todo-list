"use client"
import React, { useState } from "react"

const page = ()=>{
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('')
  const [mainTask, setMainTask] = useState([])

  const addTask = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title, task}])
    console.log(title, task)
    setTitle('')
    setTask('')
  }

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Availble</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t, i)=>{
    return (
    <li key={i} className="flex items-center justify-between">
      <div className="flex items-center justify-between mb-5 size-2/3">
        <h4 className="text-2xl font-semibold">{t.title}</h4>
        <h4 className="text-2xl font-semibold">{t.task}</h4>
      </div>
      <button
        onClick={()=>{
          deleteHandler(i)
        }}
        className="bg-red-950 px-3 py-2 rounded text-2xl font-bold">
        Delete
      </button>
    </li> )
  })
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
        <input type="text"
        className="text-2xl border-zinc-800 bg-white text-black border-2 m-5 px-3 py-4 rounded"
        placeholder="Enter description"
        value={task}
        onChange={(e)=>{
          setTask(e.target.value)
        }}/>
        <button className="bg-zinc-600 m-5 px-6 py-4 text-2xl rounded">Add Task</button>        
      </form>
      <hr className="border-t-2 mt-4"></hr>
      <div className="p-8 bg-zinc-700 text-amber-100">
        <ul>
          {renderTask}
        </ul>
      </div>
        
    </div>
  )
}

export default page