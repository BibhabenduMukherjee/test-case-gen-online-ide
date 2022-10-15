// make a fisrt practice about axios and send data and recieve data in the client
const express = require("express")
const perf = require('execution-time')();
const app = express();
const pidusage = require('pidusage');
const cors = require("cors");
const util = require('node:util');
const Job =  require("./models/db_schema")
const generateFile = require("./Filegenerator/generateFilePath")
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(cors())
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/compilerdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    err && console.error(err);
    console.log("Successfully connected to MongoDB: compilerdb");
  }
);


// async function getResult() {
//   perf.start()
//   const { stdout, stderr } = await exec('g++ myCpp.cpp -o myCpp && ./myCpp');
//   const time = perf.stop()
//   return {stdout , stderr , time}
// }








app.post("/run" ,  async (req, res)=>{
const { language, code } = req.body;
// generate the filePath for save the code
const filePath = await generateFile (language , code);
// put to the db along with the path

const job = await new Job({filePath,language}).save();
const jobId = job["_id"]
// worker are active here async-ly
addJobToQueue(jobId);

res.status(201).json({jobId})


    
})
app.listen(3001 , ()=> console.log("Listenting to the port 3001"))