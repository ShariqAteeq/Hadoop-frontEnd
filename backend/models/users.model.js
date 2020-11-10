const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        minlength : 3,
        trim : true,
        unique : true
    },
    password : {
        type: String,
        required: true
    },
    role: {
        type: String
    } , 
    active: {
        type: Boolean
    }
}, {
    timestamps : true
});

const User = mongoose.model('User' , userSchema , 'Users');
module.exports = User;