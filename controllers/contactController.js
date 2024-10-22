
const dotenv = require('dotenv');
const contactModel=require('../models/contactModel')
dotenv.config();
const contactController=async (req,res)=>{
try{             
    const {name,email,msg}=req.body;
    const newContact=new contactModel({name,email,msg});
     const data=await newContact.save();
    //validation
    if(!name||!email||!msg){
        return res.status(500).send({
            success:false,
            message:'Please proviede all data'
        })
    }
 return res.status(200).send({
    success:true,
    message:'Your message send and saved sucessfully.😊' 
 })
}catch(error){
console.log(error);
return res.status(500).send({
    success:false,
    message:'Internal server Error.😞',
    error
})
}
}
module.exports={contactController};