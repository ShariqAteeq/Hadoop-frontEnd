const mongoose = require('mongoose');

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/fyp', { useNewUrlParser : true , useUnifiedTopology: true },
    err => {
        if(!err) {
            console.log('success connection');
        } else {
            console.log('error' + JSON.stringify(err, undefined, 2));
        }
    }
)

var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))



const excerciseRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');

app.use('/excercises' , excerciseRouter);
app.use('/users', usersRouter);

app.listen(4000,()=>console.log('Server started at : 4000'))