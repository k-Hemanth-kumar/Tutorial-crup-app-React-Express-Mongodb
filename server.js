const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');


const corsOptions={
    origin:"http://localhost:5001/"
}
app.use(cors(corsOptions));
const config=require('./config');
console.log(config)
mongoose.connect(`mongodb://${config.HOST}`)



const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is listining on Port:${PORT}`);
})
