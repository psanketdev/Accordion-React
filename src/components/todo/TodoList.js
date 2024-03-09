import React from "react";

export default function TodoList({ item, id, deleteTodoItem }) {
  return (
    <>
      <h3>{item}</h3>
      <a href="javascript:void(0)" onClick={() => deleteTodoItem(id)}>
        <i className="fa fa-trash"></i>
      </a>
    </>
  );
}
