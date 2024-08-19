// const express = require('express')
// const User=require('../models/userModel')
// const app=express.Router();

// app.use(express.json());

// app.post('/login',async(req,res) =>{
//     try{
//        const result= await User.findOne({username:req.body.username, password:req.body.password})
//        if(result){
//         res.send('Login successful')
//        }
//        else {
//          res.status(200).send('Invalid credentials');
//      }
//     }catch(error){
//       res.status(200).json(error)
//     }

// })

// aapp.post('/register', async (req, res) => {
//     try {
//         // Example validation
//         if (!req.body.username || !req.body.password) {
//             return res.status(400).json({ error: 'Username and password are required' });
//         }

//         const newUser = new User(req.body);
//         await newUser.save();
//         res.send('Registration successful'); // 201 Created is more appropriate for successful resource creation
//     } catch (error) {
//         res.status(200).json({ error: error.message });
//     }
// });


// module.exports = app


const express = require('express');
const User = require('../models/userModel'); // Ensure this matches the export in userModel
const app = express.Router();

app.use(express.json());

// Login route
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ 
            username: req.body.username, 
            password: req.body.password 
        });

        if (user) {
            res.send(user);
            // res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid credentials'); // Use 401 Unauthorized for invalid credentials
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message }); // Use 500 for server errors
    }
});

// Register route
app.post('/register', async (req, res) => {
    try {
        // Example validation
        if (!req.body.username || !req.body.password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send('Registration successful'); // 201 Created is more appropriate for successful resource creation
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message }); // Use 500 for server errors
    }
});

app.post('/update', async (req, res) => {
    try {
        // Example validation
        // if (!req.body.username || !req.body.password) {
        //     return res.status(400).json({ error: 'Username and password are required' });
        // }

        await User.findOneAndUpdate({_id: req.body._id},req.body);
        const user=await User.findOne({_id: req.body._id});
        res.send(user); 
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message }); // Use 500 for server errors
    }
});

module.exports = app;
