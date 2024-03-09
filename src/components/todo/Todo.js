import React, { useState } from 'react';
import TodoList from './TodoList';
import './todo.css';

export default function Todo() {
  const [list, setList] = useState();
  const [item, setItem] = useState([]);
  
  const addTodoItem = () => {
    if(!list) {
      alert('Add todo item');
    } else {
      setItem([...item, list]);
      setList('');
    }
  }

  const deleteTodoItem = (i) => {
    const updatedList = item.filter((ele, index) => index !== i);
    setItem(updatedList);
  }


  return (
    <section className='todo-section'>
      <div className="container">
        <h2>Todo List</h2>
          <div className='todo-form'>
            <input type="text" placeholder='Add Todo List...' value={list} onChange={(e) => setList(e.target.value)} />
            <a href="javascript:void(0)" onClick={addTodoItem}><i className="fa fa-plus"></i></a>
          </div>
        <ul className='todo-list'>
            {
              item.map((ele, i) => {
                return (
                  <li key={i}>
                    <TodoList item={ele} id={i} deleteTodoItem={deleteTodoItem} />
                  </li>
                )
              })
            }
        </ul>
      </div>
    </section>
  )
}
