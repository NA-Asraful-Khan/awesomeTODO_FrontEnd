import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo,updateTodo,deleteTodo } from '../redux/actions/todoAction';


const SingleTodo = ({todo}) => {
    const [editing,setEditing]= useState(false);
    const [text,setText]= useState(todo.data);
    const dispatch = useDispatch();
    const onformSubmit=(e) =>{
        e.preventDefault()
        setEditing(!editing)
        dispatch(updateTodo(todo._id, text))
    }
  return (
    <li 
    className='task' onClick={()=>dispatch(toggleTodo(todo._id))} style={{textDecoration: todo.done ?'line-through': '',
            color:todo.done?'#862835':'#fff'}}>
        
        <span style={{display:editing?'none':'',
            color:todo.done?'#862835':'#fff'}}>{todo.data}</span>
        <form onSubmit={onformSubmit} style={{display:editing?'inline':'none'}}>
            <input 
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            className='editTodo' />
        </form>
        <span onClick={()=>dispatch(deleteTodo(todo._id))} className='icon'><i className='fas fa-trash'/></span>
        <span onClick={()=>setEditing(!editing)} className='icon'><i className='fas fa-pen'/></span>
    </li>
  )
}

export default SingleTodo