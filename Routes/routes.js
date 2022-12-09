const express = require("express");
const router = express.Router();

const {uploads}=require("../file-uplaod.js/multer");
const {uploadHandler}=require("../Controller/filehandler")




router.route('/upload').post(uploads.single("File"),uploadHandler)



module.exports=router
