const { handlingfile } = require("./fileread");
const sendMail = require("../EmailService/EmailServices");
const FileModel = require("../models/file.model");
const {uploadFile} =require('../file-uplaod.js/s3')
let XLSX = require("xlsx");
const Admintemplate = require("../EmailService/Admintemplate");
const link = require("../models/link");

require("dotenv").config();

exports.uploadHandler = async (req, res) => {
  try {
    let fileinfo = req.file;
    // let title = req.body.title;
    let data = await handlingfile(req.file.path);
    //console.log(data)
    //return res.json(data)
    FileModel.insertMany(data, (err) => {
      if (err) console.log(err);
      console.log("sucessfull");
    });

    let sentEmail = await FileModel.find({ Email: { $exists: true } });
    //return res.status(200).json({sentEmail})

    // sentEmail.forEach((element) => {
      
    //     sendMail(
    //       {
    //         to: element.Email,
    //         subject: "Welcome to antino Labs",
    //         html: UserTemplate(),
    //       },
    //       (err) => {
    //         if (err) console.log(err);
    //         FileModel.findOneAndUpdate(
    //           { Email: element.Email },
    //           { $set: [{ Acknowledge: "Email Sent" }] }
    //         );
    //       }
    //     )
      
    // });

    let convertdata = await FileModel.find()

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    //const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.arr);
    //const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "test");

    XLSX.writeFile(wb, "test2.xlsx");
let y=''
 uploadFile("test2.xlsx")
//console.log(x)
//let data3 = await link.find()
//console.log(data3) 
sendMail({
    from: 'rvsharma2652@gmail.com',
    to: 'rvsharma2652@gmail.com',
    subject: 'EazyShare file sharing',
    text: `${'rvsharma2652@gmail.com'} shared a file with you.`,
    html: Admintemplate({
              emailFrom:'rvsharma2652@gmail.com', 
              downloadLink: `${link}` ,
              size: parseInt(1000) + ' KB',
              expires: '24 hours'
          })
  })
  .then(() => {
    console.log({success: true});
  })
  .catch(err => {
    console.log({error: 'Error in email sending.'});
  });
    res.status(200).json()

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
