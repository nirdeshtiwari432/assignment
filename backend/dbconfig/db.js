const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGOURI);
        

    }catch(error){
        console.log(error);
    }
};

module.exports = connectDB;