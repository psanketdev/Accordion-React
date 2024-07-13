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
        <li>
          <NavLink exact activeClassName="active" to="counter-hooks">Counter Using Hook</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="progress-bar">Progress Bar</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="password-show-hide">Password Show Hide</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="load-more">Load More</NavLink>
        </li>
      </ul>
    </nav>
  );
}
