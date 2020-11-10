import React, { Component } from "react";
import bg from "../img/bg.svg";
import avatar from "../img/avatar.svg";
import wave from "../img/wave.png";
import { connect } from "react-redux";
import { login } from "../store/actions/authActions";
import { Redirect , Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      success: false,
      err: this.props.msg
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({err: ''});
    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.login(user);
    this.setState({
      username: "",
      password: "",
    });
  }
  componentDidMount(){
    this.setState({
      err: ''
    })
  }


   render() {
    let { msg } = this.props;

    this.state.err = msg;

    return (
      <div>
        <img className="wave" src={wave} />
        <div className="container">
          <div className="img">
            <img src={bg} />
          </div>
          <div className="login-content">
            <form onSubmit={this.onSubmit} className = "login-form">
              <img src={avatar} />
              <h4 className = "title-sub">Login to your Account</h4>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  <input
                    type="text"
                    className="input"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    required
                  />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  <input
                    type="password"
                    className="input"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    required
                  />
                </div>
              </div>
              <p className = "login-errMsg">{this.props.msg}</p>
              <Link to = '/signup' className = "login-link">SignUp</Link>
              <input type="submit" className="btn" value="Login" on />
            </form>
          </div>
        </div>
        {this.props.auth ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    msg: state.auth.message
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
