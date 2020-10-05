import React, { Component } from 'react';
import { Link , Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.email}</td>
    <td>{props.exercise.age}</td>
    <td>{props.exercise.gender}</td>
    <td>{props.exercise.city}</td>
    <td>{props.exercise.quali}</td>
    <td>{props.exercise.status}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id} className = "table-btn">edit</Link><a href="#" className = "table-btn" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {

    axios.get('http://localhost:4000/excercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
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
        return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
      }
      else if(currentexercise.username == this.props.username){
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    }})
  }

  render() {
    console.log(this.props.role);
    return (
      <div className = "exerciseList">
        <h3>Logged Exercises</h3>
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
        {this.props.auth == false ? <Redirect to = '/login' /> : null}
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

export default connect(mapStateToProps)(ExercisesList);