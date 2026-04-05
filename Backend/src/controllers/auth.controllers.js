const userModel = require('../models/user.model');


async function registerUser(req,res){
    //models p jo routes ki req aai hogi wo yha forward krni hogi
    // then uske baad req.bidy se data nikalna hoga
    const {username,email,password} = req.body;

    //we should check before sending to fronted
    const isUserAlreadyExisted = await userModel.findOne({
        email
        })
        if(isUserAlreadyExisted){
            return res.status(409).json({
                messgae:"Already existed"
            })
        }
    }
   
    // 2 creating the user
    const user = await userModel.create({
        username,email,password
    })

    res.status(201).json({
        message:"User registered successfully",
        user
    })      
    //token user bn rha hota hai jbh user register kre
    //data is obj format me hota hai
    //data should be in the form of an object AND UNIQUE

    // 3 TOken create hoga
    // .sign methods perform.lot of operation and we get string perform lot of operation with  jwt k sath
    // then we get the string called token 
    //we dont send them in response
    const token = Jwt.sign({
        id:user._id
         
    },process.env.JWT_SECRET)
    //Token is getting saved in cookie 
    // server can access the data inside cookie which is good 
    res.cookie("token",token)
    res.status(201).json({
         message:"User registered successfully",
        user,
    })








module.exports = {
    registerUser
}



// Why we are. creating token ?
// 