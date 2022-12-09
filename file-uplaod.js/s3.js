const AWS = require("aws-sdk");

const fs = require("fs");
require("dotenv").config();
const sendMail = require("../EmailService/EmailServices");
const Admintemplate = require("../EmailService/Admintemplate");
const link = require("../models/link");
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

exports.uploadFile = (file) => {
    fs.readFile(file, (err,data) => {
    if (err) throw err;
    let params = {
        Bucket: process.env.AWS_BUCKET_NAME,  //HERE
        Key: 'test2.xlsx', //HERE 
        Body: JSON.stringify(data, null, 2)
    };
    s3.upload(params, function (err, data) {
       if(err) return err
let x =data.Location
   console.log(data.Location);
return data.Location
    });
  });
};

function sendMail1(link){
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
}