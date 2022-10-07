// make a fisrt practice about axios and send data and recieve data in the client
const express = require("express")
const perf = require('execution-time')();
const app = express();
const pidusage = require('pidusage');
const cors = require("cors");
const util = require('node:util');
const Job =  require("./models/db_schema")
const exec = util.promisify(require('node:child_process').exec);
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())


async function getResult() {
  perf.start()
  const { stdout, stderr } = await exec('g++ myCpp.cpp -o myCpp && ./myCpp');
  const time = perf.stop()
  return {stdout , stderr , time}
}

app.post("/run" ,  async (req, res)=>{
const { language, code } = req.body;
// generate the filePath for save the code
const filePath = await generateFilePath(code,language);
// put to the db along with the path

const job = await new Job({filePath,language}).save();
const jobId = job["_id"]
// worker are active here async-ly
addToQueue(jobId);

res.status(201).json({jobId})


    
})
app.listen(3001 , ()=> console.log("Listenting to the port 3001"))