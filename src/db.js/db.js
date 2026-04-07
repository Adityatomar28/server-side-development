const mongoose = require('mongoose');

async function connectDB(){
    try {
        await mongoose.connect(process.MONGO_URI)
        console.log("Database connected successfully")
        
    } catch (error) {
        console.log("Database connected successfully")

    }
}

module.exports = connectDB; 