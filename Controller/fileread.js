let XLSX = require("xlsx");


exports.handlingfile=(async(fileLocation)=>{
  console.log(fileLocation)
  let workbook = XLSX.readFile(fileLocation);
  let sheet_name_list = workbook.SheetNames;
  let x = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    x[i].Error = "None";
    x[i].Acknowledge = "Uncessfully";
  }
  for (let i = 0; i < x.length; i++) {
    if (!x[i].Email) {
      x[i].Error = "Email is missing";
    }
    if (!x[i].MOBILENO) {
      x[i].Error = "Mobile is missing";
    }
    if (!x[i].EMPNAME) {
      x[i].Error = "Name is missing ";
    }
    if (!x[i].Email && !x[i].MOBILENO) {
      x[i].Error = "Email and Mobile is missing";
    }
    if (!x[i].Email && !x[i].EMPNAME) {
      x[i].Error = "Email and Name is missing";
    }
    if (!x[i].EMPNAME && !x[i].MOBILENO) {
      x[i].Error = "Name and Mobile is missing";
    }
  }
 let data=[]
 data =[...x]
  return data
})

