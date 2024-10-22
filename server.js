const express =require('express');
const cors =require('cors');
const dotenv =require('dotenv');
//dotenv config
dotenv.config();
//rest object 
const app =express();
const connectDB=require('./ConnectDB/connectDB')
const contactRoute=require('./routes/contactRoute')
const path=require('path')
connectDB();
//midlewares
app.use(cors());
app.use(express.json());
app.use(cors());
//static files from client build folder
app.use(express.static(path.join(__dirname,'./client/build')));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
});
//routes
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to node server.</h1>')
})
// app.use('/api/v1/portfolio',portfolioRoute);
app.use('/api/v1/contact',contactRoute);
//port
const PORT=process.env.PORT|| 8080;
//listen
app.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT}`);
});