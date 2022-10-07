
const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').cpus().length;
const process = require('node:process');
const util = require('node:util');
const express = require("express")
const app = express()
const perf = require('execution-time')();
const execFile = util.promisify(require('node:child_process').execFile);
const exec = util.promisify(require('node:child_process').exec);
async function ruu (){
  const {stdout , stderr} = await execFile("./run.sh")
  //console.log(stdout)

  console.log(stderr);

}

ruu()

// async function getResult() {
//   perf.start()
//   const { stdout, stderr } = await exec('g++ myCpp.cpp -o myCpp && ./myCpp');
//   const time = perf.stop()
//   return {stdout , stderr , time}
// }


// app.get("/run1",async (req,res)=>{
//  const {stdout , stderr , time} = await getResult()
//  res.send(stdout)
// })

// app.listen(3002 , ()=>{console.log("running...");})
