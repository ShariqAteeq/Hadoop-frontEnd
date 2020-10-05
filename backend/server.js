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

//app.use('/postMessages',postMessageRoutes)


// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri , { useNewUrlParser : true , useCreateIndex : true });

// const connection = mongoose.connection;
// connection.once('open' , () => {
//     console.log('MongoDb Connection Successed');
// });

// const excerciseRouter = require('./routes/excercises');
// const usersRouter = require('./routes/users');
// const authUserRouter = require('./routes/authUser');

// app.use('/excercises' , excerciseRouter);
// app.use('/users', usersRouter);
// app.use('/authUsers' , authUserRouter);

// app.listen(port , () => {
//     console.log(`server is running on port : ${port}`);
// });