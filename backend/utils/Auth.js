const User = require('../models/users.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userRegister = async (userDets, role, res) => {
    try {
      // Validate the username
      let usernameNotTaken = await validateUsername(userDets.username);
      if (!usernameNotTaken) {
        return res.status(400).json({
          message: `Username is already taken.`,
          success: false
        });
      }
  
      // Get the hashed password
      const password = await bcrypt.hash(userDets.password, 12);
      // create a new user
      const newUser = new User({
        ...userDets,
        password,
        role
      });
  
      await newUser.save();
      return res.status(201).json({
        message: "Hurry! now you are successfully registred. Please nor login.",
        success: true
      });
    } catch (err) {
      // Implement logger function (winston)
      return res.status(500).json({
        message: "Unable to create your account.",
        success: false
      });
    }
  };

  const validateUsername = async username => {
    let user = await User.findOne({ username });
    return user ? false : true;
  };
  
  const userLogin = async (userCreds, role, res) => {

     const SECRET = process.env.APP_SECRET;
     const jwtKey="12131";

    let { username, password } = userCreds;
    // First Check if the username is in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({
        message: "Username is not found. Invalid login credentials.",
        success: false
      });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          user_id: user._id,
          role: user.role,
          username: user.username
        },
        jwtKey,
       { expiresIn: "7 days" }
      );
  
      let result = {
        username: user.username,
        role: user.role,
        token: `Bearer ${token}`,
        expiresIn: 168
      };
  
      return res.json({
        ...result,
        message: "Hurray! You are now logged in.",
        success: true
      });
    } else {
      return res.json({
        message: "Incorrect password.",
        success: false
      });
    }
  };

  
  module.exports = {
    userRegister,
    userLogin
  };
