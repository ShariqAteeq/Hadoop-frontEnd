import React from "react";
import Avatar from "@material-ui/core/Avatar";
import av from "../img/av1.jpg";

const Users = () => {
  return (
    <div className="users-cardBox">
        <h1 className = "users-head">Users</h1>
        <div className = "user-cards">
      <div className="users-card">
        <Avatar alt="Remy Sharp" src={av} className="user-avatar" />
        <div className = "user-flex">
            <h3>Name</h3>
            <h3>Shariq</h3>
        </div>
        <div className = "user-flex">
            <h3>Email</h3>
            <h3>shariq@shariq.com</h3>
        </div>
        <div className = "user-flex">
            <button>Block</button>
            <button>Unblock</button>
        </div>
      </div>
      <div className="users-card">
        <Avatar alt="Remy Sharp" src={av} className="user-avatar" />
        <div className = "user-flex">
            <h3>Name</h3>
            <h3>Shariq</h3>
        </div>
        <div className = "user-flex">
            <h3>Email</h3>
            <h3>shariq@shariq.com</h3>
        </div>
        <div className = "user-flex">
            <button>Block</button>
            <button>Unblock</button>
        </div>
      </div>
      <div className="users-card">
        <Avatar alt="Remy Sharp" src={av} className="user-avatar" />
        <div className = "user-flex">
            <h3>Name</h3>
            <h3>Shariq</h3>
        </div>
        <div className = "user-flex">
            <h3>Email</h3>
            <h3>shariq@shariq.com</h3>
        </div>
        <div className = "user-flex">
            <button>Block</button>
            <button>Unblock</button>
        </div>
      </div>
      <div className="users-card">
        <Avatar alt="Remy Sharp" src={av} className="user-avatar" />
        <div className = "user-flex">
            <h3>Name</h3>
            <h3>Shariq</h3>
        </div>
        <div className = "user-flex">
            <h3>Email</h3>
            <h3>shariq@shariq.com</h3>
        </div>
        <div className = "user-flex">
            <button>Block</button>
            <button>Unblock</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Users;
