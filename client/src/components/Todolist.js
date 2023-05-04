import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggletodo,updateTodo,deleteTodo } from '../redux/actions/actions';

const Todolist = ({data}) => {
    const [edit,setEdit] = useState(false);
    const [text,setText] = useState(data?.data);
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(toggletodo(data._id))
    }
    const editForm = (e) => {
        e.preventDefault();
        setEdit(prevState => !prevState)
        dispatch(updateTodo(data._id,text))
    }
    const deletefunc = () => {
        dispatch(deleteTodo(data._id))
    }
  return (
    <li  style={{textDecoration:data.done ? 'line-through' : '', color : data.done ? 'black' : 'none'}}>
        <span  onClick={toggle} style={{display: edit ? 'none' : " "}}>{data?.data}</span>
        <form style={{display : edit ? 'inline':'none'}} onSubmit={editForm}>
            <input 
            type='text'
            value = {text}
            className='todo-edit'
            onChange={(e) => setText(e.target.value)}
            />
            </form> 
        <span onClick={deletefunc} style={{float : 'right'}}><i className="fas fa-trash"></i></span>
        <span onClick={() => setEdit(prevState => !prevState)} style={{float : 'right'}}><i className="fas fa-pen"></i></span>
    </li>
  )
}

export default Todolist