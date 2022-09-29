import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/TodoSlice'
import './todoredux.css'


const TodoRedux = () => {
  const [input, setInput] = useState()
   const dispatch=useDispatch()

  const addTodo=()=>{
     console.log(`adding todo ${input}`);
     dispatch(saveTodo({
        item:input,
        done:false,
        id:Date.now()
     })
     )
  }

  return (
    <div className="inputs">
      <input type="text" value={input} placeholder="Add Data...." onChange={(e)=>{setInput(e.target.value)}} />
      <button onClick={addTodo} >+Add</button>
    </div>
  )
}

export default TodoRedux