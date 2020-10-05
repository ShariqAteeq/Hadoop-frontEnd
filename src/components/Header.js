import React from 'react';
import { NavLink, Redirect , Link } from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import { logout } from '../store/actions/authActions';
export default function ButtonAppBar() {

 const dispatch = useDispatch();

  return (
    
    <nav className="header">
     
      <div className="header__logo">
        <h3>Excercise Tracker</h3>
      </div>
      <div className="header__nav">
        <NavLink activeClassName="header__linkActive" className="header__link" to='/' exact>ExcerciseList</NavLink>
        <NavLink activeClassName="header__linkActive" className="header__link" to='/add' exact>AddExcercise</NavLink>
        <Link className="header__link" onClick = {() => dispatch(logout())}>Logout</Link>
        <NavLink activeClassName="header__linkActive" className="header__link" to='/user' exact>CreateUser</NavLink>
      </div>
    </nav>
  );
}
