const musicModel = require("../models/music.model");
const {uploadFile} = require("../services/storage.service")
const albumModel = require("../models/music.model")

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
        artist:req.user.id,        //replaced decoded.id,
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

async function createAlbum(req,res){
    const token = {title,musicIds} = req.body;

    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    // verifying the token whether it is wrong or right
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(decoded.role !== "artist"){
            return res.status(403).json({message:"You don't have access to create an account here"})
        }
        const {title,musicIds} = req.body;
        const album = await albumModel.create({
            title,
            artist:req.user.id,   //decoded.id replaced as there is middleware 
            music:musicIds,
        })
        return res.status(201).json({
            message:"Album created successfully",
            album:{
                id:album._id,
                title:album.title,
                artist:album.music,
                music:album.music,
            }
        })
    } catch (error) {
        console.log(err);
        return res.status(401).json({message:"Unauthorized"})
    }
}

async function getAllMusics(req,res){
    // is we use populate then we get the details of all the artist instead of getting only id and we get acc or us also
    const music = await musicModel.find().populate("artist")

    res.status(200).json({
        message:"Music fetched successfully",
        music:music,
    })
}


async function getAllAlbums(req,res)(
    const albums = await albumModel.find().populate("artist","username","email").populate("musics"),

    res.status(200).json({
        message:"Albums fetched succcessfully",
        albums:albums,
    })
)

module.exports = {createMusic,createAlbum,getAllMusics,getAllAlbums}


















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
