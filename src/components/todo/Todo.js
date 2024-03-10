import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import './todo.css';

// Get items from localstorage
const getLocalStorageData = () => {
  const todoList = localStorage.getItem('todoItems');
  if(todoList) {
    return JSON.parse(localStorage.getItem('todoItems'));
  } else {
    return [];
  }
}

export default function Todo() {
  const [list, setList] = useState();
  const [item, setItem] = useState(getLocalStorageData());
  const [editBtnToggle, setEditBtnToggle] = useState(false);
  const [isEdit, setIsEdit] = useState(null);

  // Stored items in localstorage
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(item));
  },  [item])
  
  // Add todo items
  const addTodoItem = () => {
    if(!list) {
      alert('Add todo item');
    } else if (list && editBtnToggle) {
      setItem(
        item.map(ele => {
          if(ele.id === isEdit) {
            return {...ele, name: list};
          };
          return ele;
        })
      );
      setEditBtnToggle(false);
      setList('');
      setIsEdit(null);
    } else {
      let data = { id: new Date().getTime().toString(), name: list };
      setItem([...item, data]);
      setList('');
    }
  }

  // Delet todo items
  const deleteTodoItem = (id) => {
    const updatedList = item.filter(ele => ele.id !== id);
    setItem(updatedList);
  }

  // Edit todo items
  const editItems = (id) => {
    let newEditItem = item.find(ele =>  ele.id === id);
    setEditBtnToggle(true);
    setList(newEditItem.name);
    setIsEdit(id);
  }

  return (
    <section className='todo-section'>
      <div className="container">
        <h2>Todo List</h2>
          <div className='todo-form'>
            <input type="text" placeholder='Add Todo List...' value={list} onChange={(e) => setList(e.target.value)} />
            {
              editBtnToggle ? 
              <a href="#" onClick={addTodoItem}><i className="fa fa-edit"></i></a>
              :
              <a href="#" onClick={addTodoItem}><i className="fa fa-plus"></i></a>
            }
          </div>
        <ul className='todo-list'>
            {
              item.map(ele => {
                return (
                  <li key={ele.id}>
                    <TodoList name={ele.name} id={ele.id} editItems={editItems} deleteTodoItem={deleteTodoItem} />
                  </li>
                )
              })
            }
        </ul>
      </div>
    </section>
  )
}
