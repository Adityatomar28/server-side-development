const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

async function registerUser(req,res){
   const {username,email,password,role = "user"} = req.body;

   const isUserAlreadyExists = await userModel.findOne({
    $or:[
        {username},
        {email}
    ]
   })
   if(isUserAlreadyExists){
    return res.status(409).json({message:"User already exists"})
   }


   const hash = await bcrypt.hash(password,10)

  //yhe user role = user s aaya hai wp req.bod m nhi gya
   const user = await userModel.create({
    username,
    email,
    password:hash,
    role
   })
//    we have create two property while creating token 1)atleast one data should be unique
   const token = jwt.sign({
    id:user._id,
    role:user.role,
   },process.env_JWT_SECRET)

   res.cookie("token",token)


   res.status(201).json({
    message:"user registered successfully",
    user:{
        id:user._id,
        username:user.username,
        email:user.email,
        role:user.role,
    }

   })
}

async function loginUser(req,res){
    // While login there will be 2 combination as there are two unique id
    // opt 1)while login ->user write one the things from username or email and other one will be left null
    const {username,email,password} = req.body;

    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(!user){
        return res.status(401).json({message:"Invalid credentials"})
    }
    // jo bhi hashing string database m store hogi  usse compare krlenge
    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(401).json({message:"Invalid credentials"})
    }
    const token = jwt.sign({
        id:user._id,
        role:user.role,

    },process.env_JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message:"User logged in successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
        }
    })
}

async function logoutUser(req,res) {
    res.clearCookie("token")
    res.status(200).json({message:"User logged out successfully"})
}

module.exports = {registerUser,loginUser,logoutUser}