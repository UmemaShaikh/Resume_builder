const mongoose = require('mongoose');
 
const userSchema =new mongoose.Schema({
    username:{type:String , require:true},
    password:{type:String,require:true},
    firstName:{type:String,default:''},
    lastName:{type:String,default:''},
    Email:{type:String,default:''},
    mobilenum:{type:String,default:''},
    portfolio:{type:String,default:''},
    objective:{type:String,default:''},
    address:{type:String,default:''},
    Education:{type:Array,default:[]},
    skills:{type:Array,default:[]},
    Experience:{type:Array,default:[]},
    projects:{type:Array,default:[]}



},{
    timestamps:true
})

const userModel=mongoose.model('users',userSchema)
module.exports = userModel
