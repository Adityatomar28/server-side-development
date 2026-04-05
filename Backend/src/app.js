const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');

const app = express();

//req.body m jo data aata tha usko json format m convert krne k liye middleware use krna padta hai taaki express pdh paay
app.use(express.json());

//Multer is a middleware as user is sending file therefore there is goona be diffrent middleware to read the file 
const  upload = multer({storage:multer.memoryStorage()})



//creating api for creating a post

app.post("/create-post",upload.single("image"), async (req,res) => {   
    //uploading the file to image kit and getting the url of the uploaded file then
    const result = await uploadFile(req.file.buffer);
    //then after getting url we save them in database create creating a post in the database with the url of the uploaded file and the caption sent by the user
    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption,
    })
    return res.status(201).json({
        message:"Post created successfully",
        post,
    })
});

//server s data frontend p ja rha hota hota hai tbh get request use krte hai
//jitne bhi post create hoi hongi unko frontend p bhejne k liye get request use krte hai

app.get("/posts",async(req,res) => {
    const posts = await postModel.find()

    return res.status(200).json({
        message:"Posts fetched successfully",
        posts,
    })
})




module.exports = app;