const multer = require('multer');

let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
     if (file) {
      cb(null, true);
    } else {
      cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"));
    }
  };
  
  exports.uploads=multer({
    storage,
    fileFilter,
    limits:{files:1}
  })