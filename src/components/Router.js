import React, { Component } from "react";
import { Redirect , Route  } from "react-router-dom";
import AddExcercise from './AddExcercise';
import EditExcercise from './EditExcercise';
import ExcercisesList from './ExcerciseList';
import CreateUser from './createUser';
import Login from './login';
import Users from '../components/users';
import { connect } from 'react-redux';
import {isLogged} from '../store/actions/authActions';


class Router extends Component {
  componentDidMount() {
    this.props.isLogged();
  }
  render(){
    const {auth} = this.props;
    if (auth == "true" || auth == true) {
      return (
        <div>
          <Route exact path="/" component={ExcercisesList} />
          <Route path="/add" component={AddExcercise} />
          <Route path="/edit/:id" component={EditExcercise} />
          {/* <Route path = "/users" component = {Users} /> */}
          </div>
      );
    }
     else if(auth == "false" || auth == false){
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
}

const mapStateToProps = state => {
  return {
    auth: state.auth.auth,
    role: state.auth.role
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isLogged: () => dispatch(isLogged())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Router);