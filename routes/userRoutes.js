const express = require('express')
const user=require('../models/userModel')
const app=express.Router();

app.get('/login',async(req,res) =>{
    try{
       const result= await User.findOne({username:req.body.username, password:req.body.password})
       if(result.length){
        res.send('Login successful')
       }

    }catch(error){
    res.status(400).json(error)
    }

})

app.get('/register',async(req,res) =>{
    try{
       const newuser=new User(req.body)
       await newuser.save()
        res.send('Registration successful')
    }catch(error){
    res.status(400).json(error)
    }

})

module.exports = app