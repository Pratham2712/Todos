import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux' 
import { getTodos } from '../redux/actions/actions.js'
import Todolist from './Todolist.js'
const DisplayTodos = () => {
    const dispatch = useDispatch();
    const info = useSelector((state) => state.todos);
    
    useEffect(() => {
        dispatch(getTodos());
    },[dispatch])
  return (
    <div>
      <h1>tosos</h1>
      <ul>
      {info.map((data) => <Todolist data={data} key={data._id}/> )} 
      </ul>
    </div>
  )
}

export default DisplayTodos