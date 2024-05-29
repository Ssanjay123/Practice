const express = require('express')

const app = express();

const PORT = 3000;

app.get('/',  (req,res)=>{
    res.json({message:"Hey,I am node js from docker"})
})

app.listen(PORT,()=>{
    console.log(`server is running on${PORT} `)
})