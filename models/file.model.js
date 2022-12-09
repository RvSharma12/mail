const mongoose = require("mongoose");

const excelSchema = mongoose.Schema({
  EMPNAME: {
    type: String,
  },
  Email: {
    type: String,
  },
  MOBILENO: {
    type: Number,
  },
  Error: {
    type: String,
    default:'None'
  },
  Acknowledge: {
    type: String,
    default:'Unscessfull'
  },
});

module.exports=mongoose.model('excel2',excelSchema)