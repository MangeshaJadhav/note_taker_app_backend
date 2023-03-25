const express = require("express");
const app = express();

const registrationRoute = require('./routes/registration')
const loginRoute = require('./routes/login'); 

const createNote =require('./routes/createNote');
const getNote =require('./routes/getNote');
const deleteNote=require("./routes/deleteNote")

bodyParser = require('body-parser');
const cors = require("cors");
 

//--------------------------------------
//connection with mongoDB
const mongoose = require("mongoose");
const dotenv=require("dotenv");//call the library
dotenv.config();//

// const url=("process.env.URL")
mongoose.set("strictQuery", true);
mongoose
.connect('mongodb://Mangesh:Mangesh@ac-f6n0okn-shard-00-00.hos3xxm.mongodb.net:27017,ac-f6n0okn-shard-00-01.hos3xxm.mongodb.net:27017,ac-f6n0okn-shard-00-02.hos3xxm.mongodb.net:27017/?ssl=true&replicaSet=atlas-lc7bfe-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(() => console.log("MongoDB Connection Successfull"))
.catch((err)=>{
  console.log(err);
});//connect is promise so it resolve and reject
  
  app.use(express.json())//to test data while api to work

// app.get("/api/test",()=>{
//     console.log('Test is successful');
// })//chekck this in pur terminal

//now test like http:localhost:5000/api/users/usertest
//-----------------------------------------


app.use(cors());
app.use('/public', express.static('public'));
app.use(express.json());


//another method
app.use('/api', registrationRoute);
app.use('/api', loginRoute)

//create note
app.use('/api', createNote)

//get note
app.use('/api', getNote)

//delete the survey
app.use('/api', deleteNote)

app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
      next(new Error('Something went wrong'));
  });
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



//this is callback function
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running on 5000!");
});
 










