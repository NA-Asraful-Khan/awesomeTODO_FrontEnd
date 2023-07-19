import React, { useState } from 'react'
import { addNewTodo } from '../redux/actions/todoAction'
import { useDispatch } from 'react-redux'

const TodoComp = () => {
    const [text,setText] = useState("")
    const dispatch = useDispatch();
    const onFormSubmit = (e)=>{
      e.preventDefault()
        dispatch(addNewTodo(text))
        setText('')

    }
    const onInputChange = (e)=>{
      setText(e.target.value)
    }
  return (
    <form action="" className='form' onSubmit={onFormSubmit}>
        <input placeholder='Enter New Todo' className='input' type="text" onChange={onInputChange}
        value={text} />
    </form>
  )
}

export default TodoComp