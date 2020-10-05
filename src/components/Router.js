import React from "react";
import { useSelector } from "react-redux";
import { Redirect , Route ,  Switch } from "react-router-dom";
import AddExcercise from './AddExcercise';
import EditExcercise from './EditExcercise';
import ExcercisesList from './ExcerciseList';
import CreateUser from './createUser';
import Login from './login';

function Router() {
  const auth = useSelector((state) => state.auth.auth);
  if (auth == true) {
    return (
      <Switch>
        <Redirect to="/" />
        <Route exact path="/" component={ExcercisesList} />
        <Route path="/add" component={AddExcercise} />
        <Route path="/edit/:id" component={EditExcercise} />
      </Switch>
    );
  } else {
    return (
      <div>
        <Redirect to="/login" />
        <Route path="/signup" component={CreateUser} />
        <Route path = '/login' component = {Login} />
      </div>
    );
  }

  return <div></div>;
}

export default Router;
