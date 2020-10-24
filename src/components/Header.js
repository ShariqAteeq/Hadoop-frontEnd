import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/authActions";
import Avatar from "@material-ui/core/Avatar";
export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.username);
  const fd = userName.charAt(0).toUpperCase();
  const ld = userName.charAt(userName.length - 1).toUpperCase();
  return (
    <div>
      <nav>
        <label className="logo">Log Analyzer</label>
        <ul>
          <li>
            <NavLink
              activeClassName="header__linkActive"
              className="header__link"
              to="/"
              exact
            >
              ExcerciseList
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="header__linkActive"
              className="header__link"
              to="/add"
              exact
            >
              AddExcercise
            </NavLink>
          </li>
          <li>
            <Link className="header__link" onClick={() => dispatch(logout())}>
              Logout
            </Link>
          </li>
          <li>
            <Avatar>
              {fd}
              {ld}
            </Avatar>
          </li>
          <li>
            <p>{userName}</p>
          </li>
       
        </ul>
      </nav>
    </div>
  );
}
