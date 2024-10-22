const mongoose=require('mongoose');
const contactShema=new mongoose.Schema({
  name:{
  type:String,
  required:[true,"Username is Required"],
  },
  email:{
    type:String,
    required:[true,"Email is Required"],
    },
    msg:{
        type:String,
        required:[true,"message is Required"],
        },

});
module.exports=mongoose.model("contact",contactShema);