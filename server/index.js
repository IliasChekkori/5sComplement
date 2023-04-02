const express = require('express');
const dotenv = require('dotenv'); 
dotenv.config()
const mongoose = require('mongoose'); 



const router = require('./routes/listingRoutes');


const app = express(); 
const PORT = process.env.PORT; 


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(() => {
    console.log('Succesfully connected to mongoDB database'); 
}).catch(err => console.log(err)); 

app.use(express.json()); 
app.use("/listing", router);


app.listen(PORT, console.log("server started on port", PORT));