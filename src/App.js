import React , {Component, useEffect} from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddExcercise from './components/AddExcercise';
import EditExcercise from './components/EditExcercise';
import ExcercisesList from './components/ExcerciseList';

import CreateUser from './components/createUser';
import Header from './components/Header';
import Login from './components/login';
import {useSelector} from 'react-redux';
import Router from './components/Router';
import {isLogged} from './store/actions/authActions';
import { connect } from 'react-redux';

class App extends Component {
  // componentDidMount() {
  //   this.props.isLogged();
  // }
  render(){
    
    let navbar = this.props.auth == true ? <Header/>: null;
    return (
    
      <div className="App">
        
        <BrowserRouter>
        {navbar}
        <Router />
        {/* <Router /> */}
       
          {/* <Switch>
            <Route exact path = '/' component = {ExcercisesList} />
            <Route path = '/login' component = {Login} />
            <Route path = '/add' component = {AddExcercise} />
            <Route path = '/edit/:id' component = {EditExcercise} />
            <Route path = '/signup' component = {CreateUser} />
          </Switch> */}
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isLogged: () => dispatch(isLogged())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

