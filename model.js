const mongoose = require("mongoose");

const passwordSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true
      },
    email: {
        type:String,
        required:true
    },
  });
  
module.exports = mongoose.model("userdata", passwordSchema);