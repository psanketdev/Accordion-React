import React from "react";

export default function TodoList({ name, id, editItems, deleteTodoItem }) {
  return (
    <>
      <h3>{name}</h3>
      <div>
        <a href="#" onClick={() => editItems(id)}>
          <i className="fa fa-edit"></i>
        </a>
        <a href="#" onClick={() => deleteTodoItem(id)}>
          <i className="fa fa-trash"></i>
        </a>
      </div>
    </>
  );
}
