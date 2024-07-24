const mongoose = require('mongoose')

const URI= 'mongodb+srv://umemashaikh294:shaikh%406355@cluster0.kstyfts.mongodb.net/';

mongoose.connect(URI)
    .then(() => console.log("MongoDB connection successful"))
    .catch((err) => console.error("MongoDB connection error: ", err));


const connection=mongoose.connection

connection.on('connected',()=>{
    console.log("mongodb connection succesful");
});

connection.on('error',(err)=>{
    console.log("error",err);
});
