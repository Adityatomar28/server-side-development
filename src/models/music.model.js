const mongoose = require('mongoose');


const musicSchema = new mongoose.Schema({
    uri:{
        type:String,
        required:true,

    },
    title:{
        type:String,
        required:true,
    },
    // which artist has create it will store them id of them
    //and details of artist are storing in the collection of user which is in user.model.js
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user", //name of collection
        require:true,
    }
})

const musicModel = mongoose.model("music",musicSchema)

module.exports = musicModel;