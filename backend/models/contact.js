const mongoose = require("mongoose");

const contacts = new mongoose.Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true},
        phone:{type:String,require:true},
        message:{type:String}
    },
    { timestamps:true}
);
module.exports = mongoose.model("Contact",contacts)