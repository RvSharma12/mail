const express = require('express');

const mongoose = require('mongoose');

const app=express();
const route = require("./Routes/routes")
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/example')
.then(()=>{
    console.log('mongodb is connected');
})
.catch(err=>console.log(err))


app.use('/app',route)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})



//  console.log(x);


// const mongoose =require('mongoose');

// const FileModel = require('./models/file.model');
// const fileModel = require('./models/file.model');


// let data = []

// const sheets = file.SheetNames

// for(let i = 0; i < sheets.length; i++)
// {
//    const temp = reader.utils.sheet_to_json(
//         file.Sheets[file.SheetNames[i]])
//    temp.forEach((res) => {
//       data.push(res)
//    })
// }

// // Printing data
// // console.log(data)
// FileModel.insertMany(data,(err)=>{
// if(err) console.log(err)
// console.log("sucessfull")
// })
// let x = FileModel.updateMany({Email:{$exists:false}},{Error:"Email is missing"},(data,err)=>{
//     if(err) console.log(err)
//     console.log("jjjj")
// });
// let y = FileModel.updateMany({$and:[{Email:{$exists:false}},{MOBILENO:{$exists:false}}]},{Error:"Email And Mobile is missing"},(data,err)=>{
//     if(err) console.log(err)
//     console.log("jjjj")
// });
// let z = FileModel.updateMany({$and:[{Email:{$exists:false}},{EMPNAME:{$exists:false}}]},{Error:"Email And EMPNAME is missing"},(data,err)=>{
//     if(err) console.log(err)
//     console.log("jjjj")
// });
