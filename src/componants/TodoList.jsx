import React, { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { getAllTodo } from '../redux/actions/todoAction';
import SingleTodo from './SingleTodo';

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos)
  
  useEffect(()=>{
    dispatch(getAllTodo())
  },[])
  return (
    <article>
      <ul>
        {
          todos.map(todo=>(
          <SingleTodo key={todo._id} todo={todo}></SingleTodo>
          ) )
        }
      </ul>
    </article>
  )
}

export default TodoList