const mongoose = require("mongoose");

const linkSchema = mongoose.Schema({
  
  link: {
    type: String,
  },
});

module.exports=mongoose.model('link',linkSchema)