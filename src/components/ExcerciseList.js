import React, { Component } from 'react';
import { Link , Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {isLogged} from '../store/actions/authActions';
const Exercise = props => (
  
  <tr>
    <td>{props.exercise.name}</td>
    <td>{props.exercise.email}</td>
    <td>{props.exercise.age}</td>
    <td>{props.exercise.gender}</td>
    <td>{props.exercise.city}</td>
    <td>{props.exercise.quali}</td>
    <td>{props.exercise.status}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      {props.role ==="admin" ? null : <div> <Link to={"/edit/"+props.exercise._id} className = "table-btn">edit</Link><a href="#" className = "table-btn" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a></div>}  
    </td>
  </tr>
)

class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: [] , users : []};
  }
 
  componentDidMount() {

    axios.get('http://localhost:4000/excercises/')
      .then(response => {
        this.setState({ exercises: response.data , role: this.props.role })
      })
      .catch((error) => {
        console.log(error);
      });

      axios.get('http://localhost:4000/users/')
      .then(res => {
        console.log(res);
        this.setState({ users : res.data });
        console.log(this.props.users);
      })
      .catch(err => {
        console.log(err);
      })

  }

  deleteExercise(id) {
    axios.delete('http://localhost:4000/excercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      if(this.props.role == 'admin') {
        return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} role = {this.props.role}/>;
      }
      else if(currentexercise.username == this.props.username){
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} role = {this.props.role}/>;
    }})
  }

  render() {
    console.log('users' , this.props.username);
    return (
      <div className = "exerciseList">
        <h3>Users Activities</h3>
        <table>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>City</th>
              <th>Qualification</th>
              <th>Status</th>
              <th>Date</th>
              <th>Operation</th>
            </tr>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    auth: state.auth.auth,
    role: state.auth.role
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isLogged: () => dispatch(isLogged())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(ExercisesList);