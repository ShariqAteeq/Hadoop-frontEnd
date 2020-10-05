const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({

    username : {type : String , required : true},
    email : {type : String },
    age : {type : String },
    gender : {type : String },
    status : {type : String },
    quali : {type : String },
    city : {type : String },
    date : {type : Date },
    //ip: {type:String}
}, {
    timestamps : true
});

const Excercise = mongoose.model('Excercise' , excerciseSchema , 'Exercises');
module.exports = Excercise;