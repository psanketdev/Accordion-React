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
        <li>
          <NavLink exact activeClassName="active" to="dark-light-theme">Dark-Light Theme</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="country-city">Fetch Country City</NavLink>
        </li>
      </ul>
    </nav>
  );
}
