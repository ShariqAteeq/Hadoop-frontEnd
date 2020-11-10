  
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

 class EditExercise extends Component {

constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeQuali = this.onChangeQuali.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      quali: "",
      status: "",
      age: "",
      gender: "",
      city: "",
      date: new Date(),
      // users: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/excercises/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          email: response.data.email,
          status: response.data.status,
          city: response.data.city,
          gender: response.data.gender,
          age: response.data.age,
          quali: response.data.quali,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeQuali(e) {
    this.setState({
      quali: e.target.value,
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }


  onSubmit(e) {
    e.preventDefault();

    const exercise = {
       name: this.state.name,
      email: this.state.email,
      status: this.state.status,
      city: this.state.city,
      gender: this.state.gender,
      age: this.state.age,
      quali: this.state.quali,
      date: this.state.date,
    }

    console.log(exercise);

    axios.post('http://localhost:4000/excercises/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

  //  return <Redirect to = '/' />;
   window.location = '/';
  }

  render() {
    return (
      <div>
      <h3>Edit Excercise</h3>
      <form onSubmit={this.onSubmit} className="input-form">
        <div className="">
          <label className = "input-label">Username </label>
  
          <input
            type="text"
            className="inputfld"
            value={this.state.name}
            onChange={this.onChangename}
          />
        </div>
        <div className="form-group">
          <label className = "input-label">Email</label>
          <input
            type="text"
            className="inputfld"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </div>
        <div className="form-group">
          <label className = "input-label">Status</label>
          <input
            type="text"
            className="inputfld"
            value={this.state.status}
            onChange={this.onChangeStatus}
          />
        </div>
        <div className="form-group">
          <label className = "input-label">Qualification </label>
          <input
            type="text"
            className="inputfld"
            value={this.state.quali}
            onChange={this.onChangeQuali}
          />
        </div>
        <div className="form-group">
          <label className = "input-label">Age </label>
          <input
            type="text"
            className="inputfld"
            value={this.state.age}
            onChange={this.onChangeAge}
          />
        </div>
        <div className="form-group">
          <label className = "input-label">Gender </label>
          <select
            ref="userInput"
            required
            className="inputfld"
            value={this.state.gender}
            onChange={this.onChangeGender}
          >
            <option>Male</option>
            <option>Female</option>
          </select> 
          </div>
          <div className="form-group">
          <label className = "input-label">City </label>
           <input 
            type="text" 
            className="inputfld"
            value={this.state.city}
            onChange={this.onChangeCity}
          />
        </div>
        <div className="form-group">
          <label className = "input-label">Date</label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
      {this.props.auth == false ? <Redirect to = '/login' /> : null}
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.auth
  }
}

export default connect(mapStateToProps)(EditExercise);