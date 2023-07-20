import React, { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { deleteTodo, getAllTodo } from '../redux/actions/todoAction';
import SingleTodo from './SingleTodo';
import Tabs from './Tabs';
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from '../redux/actions/type';

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos)

  const currentTab = useSelector(state => state.currentTab)
  useEffect(()=>{
    dispatch(getAllTodo())
  },[])

  const getTodos=()=>{
    if(currentTab=== ALL_TODOS){
      return todos;
    }else if(currentTab=== ACTIVE_TODOS){
      return todos.filter(todo=>!todo.done)
    }else if(currentTab=== DONE_TODOS){
      return todos.filter(todo=>todo.done)
    }
  }

  const removeDoneTodos=()=>{
    todos.forEach(({ done, _id })=>{
          if(done){
            dispatch(deleteTodo(_id))
          }
    })
  }
  return (
    <article>
      <div>
        <Tabs currentTab={currentTab}></Tabs>
        {
          todos.some(todo=>todo.done)?(
            <button
              className='clear'
              onClick={removeDoneTodos}
            >
              Remove Done
            </button>
          ):null
        }
      </div>
      <ul>
        {
          getTodos().map(todo=>(
          <SingleTodo key={todo._id} todo={todo}></SingleTodo>
          ) )
        }
      </ul>
    </article>
  )
}

export default TodoList