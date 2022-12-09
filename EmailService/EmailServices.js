const nodemailer =require("nodemailer");
module.exports= async({from ,to,subject,text,html})=>{
    let transporter = nodemailer.createTransport({
        host:"smtp.office365.com",
        port:587,
        secure:false,
        auth:{
            user:'skshakya999@hotmail.com',
            pass:'Shakya@123'
        }
    })


    let info = await transporter.sendMail({
        from:'skshakya999@hotmail.com',
        to:to,
        subject:subject,
        text:text,
        html:html
    })
}