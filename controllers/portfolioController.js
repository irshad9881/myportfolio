// const nodemailer = require("nodemailer");
// const Transport = require("nodemailer-brevo-transport");
// const dotenv = require('dotenv');
// const contactModel=require('../models/contactModel')
// dotenv.config();

// var transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     service:"gmail",
//     auth: {
//        user: 'moirshad2281@gmail.com',
//         pass: 'ccghmhtqtwzsyacu'
//     },
//   });
 
// const sendEmailController=async (req,res)=>{
//     console.log(req.body);
// try{             
//     const {name,email,msg}=req.body;
//     // const newContact=new contactModel({name,email,msg});
// //     await newContact.save().then(
// //         ()=>{
// //         res.status(200).json({
// //             success:true,
// //             message:"Data seved",
// //         })},
// //         ()=>{
// //             res.status(400).json({
// //                 success:true,
// //                 message:"Data not saved",
// //             })
// //         }

// // )
//     // console.log(newContact);
//     //validation
//     if(!name||!email||!msg){
//         return res.status(500).send({
//             success:false,
//             message:'Please proviede all data'
//         })
//     }
//     const info=  await transporter.sendMail({
//         from:'"moirshad588@gmail.com ',
//         to:'moirshad588@gmail.com',
//         subject:'Regarding contact',
//         text:'hello',
//         html:
//         `<h5>Detail Infromation</h5>
//         <ul>
//             <li><p>Name:${name}</p></li>
//              <li><p>Email:${email}</p></li>
//               <li><p>Message:${msg}</p></li>
//         </ul>`
//     });
//     // console.log(info.messageId)
//     //OK request
//  return res.status(200).send({
//     success:true,
//     message:'Your message send sucessfully.😊 and data saved' 
//  })
// }catch(error){
// console.log(error);
// //internal server error
// return res.status(500).send({
//     success:false,
//     message:'Send Email API Error.😞',
//     error
// })
// }
// }
// module.exports={sendEmailController};