import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav nav-link">
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Accordion
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="todolist">Todo List</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="filter">Gallery Filter</NavLink>
        </li>
      </ul>
    </nav>
  );
}
