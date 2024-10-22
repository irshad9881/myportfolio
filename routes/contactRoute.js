const express =require('express');
const { contactController } = require('../controllers/contactController');
//router object
const router=express.Router();
//routes
router.post('/sendToStore',contactController);
module.exports=router;