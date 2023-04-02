const express = require('express');
const dotenv = require('dotenv'); 
dotenv.config()
const mongoose = require('mongoose'); 



const router = require('./routes/listingRoutes');
const userRouter = require('./routes/userRoutes');
const conversationRouter = require('./routes/conversationRoutes'); 
const messageRouter = require('./routes/messagesRoutes'); 



const app = express(); 
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
const PORT = process.env.PORT; 


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(() => {
    console.log('Succesfully connected to mongoDB database'); 
}).catch(err => console.log(err)); 

app.use(express.json()); 
app.use("/listing", router);
app.use("/user", userRouter);
app.use("/conversation", conversationRouter);
app.use("/messages", messageRouter);


app.listen(PORT, console.log("server started on port", PORT));