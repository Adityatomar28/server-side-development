const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        // enum->gives u a choice that yha toh user hoga yha toh artist 
        type:String,
        enum:['user','artist'],
        default:'user',
    }
})


const userModel = mongoose.model("user",userSchema)

module.exports = userModel;