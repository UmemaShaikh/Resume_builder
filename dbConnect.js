const mongoose = require('mongoose')

const URL= 'mongodb+srv://umemashaikh294:shaikh@6355@cluster0.kstyfts.mongodb.net/'
mongoose.connect(URL)

const connection=mongoose.connection

connection.on('connected',()=>{
    console.log("mongodb connection succesful")
})

connection.on('error',()=>{
    console.log("error")
})