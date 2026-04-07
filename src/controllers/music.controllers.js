const musicModel = require("../models/music.model");
const {uploadFile} = require("../services/storage.service")

const jwt = require("jsonwebtoken");
async function createMusic(req,res) {
    
    const token = req.cookies.token;
    if(!token){
       return res.status(401).json({message:"Unauthorized"}) 
    }
    try {
    const decoded =  jwt.verify(token,process.env.JWT_SECRET)
    if(decoded.role !== "artist"){
        return res.status(403).json({message:"You don't have access to create an music "})
    }
    } catch (err) {
        return res.status(401).json({message:"Unauthorized"})
    }

    const {title} = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri:result.uri,
        title,
        artist:decoded.id,
    })
    res.status(201).json({
        music:{
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist,
        }
    })
   

}

module.exports = {createMusic}


















// Flow 
// Isko hamko protectet bnana hai kyuki 
// this api is crerating the music this api is accessed only by the artist 
// if any other try to access wil get error
// Now in token we will verify ;->
//     const token = jwt.sign({
    //     id:user._id,
    //     role:user.role,

    // },process.env_JWT_SECRET)
//  as in token we are sending the id and role thorugh role we will verify wether the user is artist or not 
