const cluster = require("node:cluster")
const express = require('express')
const os = require("os");
const { workerData } = require("node:worker_threads");
const app = express();
const totalCPU = os.cpus().length
const port = 8000;

     app.get("/",(req,res)=>{
        res.send({
            message:`Hello from Express server ${process.pid}`
        })
        cluster.worker.kill();
     })
if(cluster.isPrimary){
    for(let i=0;i<totalCPU;i++){
        cluster.fork();    
    }
    cluster.on('exit',(worker,code,signal)=>{
        console.log("worker died");
        cluster.fork();
    })
}
else{
  app.listen(port,()=>console.log(`server ${process.pid} @ localhost:8000`))
}