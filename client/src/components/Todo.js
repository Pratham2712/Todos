import React from 'react'
import { useState } from 'react'
import './todo.css'
import { useDispatch } from 'react-redux';
import { addtodos } from '../redux/actions/actions';

const Todo = () => {
    const dispatch = useDispatch();
    const [value,setValue] = useState('');
    function submit(e) {
        e.preventDefault()
        dispatch(addtodos(value));
        setValue('');
    }
    function set(e) {
        setValue(e.target.value)
    }
  return (
    <><div>
          <h1>MY TO DO LIST</h1>
          <form className='form' onSubmit={submit}>
              <input type="text"  id="input" placeholder="Enter your todos.." onChange={set} value={value}/>
                  <button id="button"><i className="fas fa-plus-square"></i></button>
              </form>
      </div>
      

          </>
  )
}

export default Todo