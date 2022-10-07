const mongoose = require("mongoose")

/* 
schema -- structure
language: [string & required , enum["cpp" , "py" , "java"] ]
filepath: [string & required]
submittedAt : [Date & required]
startedAt : [Date & required]
completedAt : [Date &  required]
status : [string ,  enum[ "pending" , "success" , "error"] ]
output : [string]
*/






const CodingSchema = mongoose.Schema({
 language : {
    type : String,
    require : true,
    enum : ["cpp" , "py" , "java"]
 },
  
 filepath: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  startedAt: {
    type: Date,
  },
  completedAt: {
    type: Date,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "success", "error"],
  },
  output: {
    type: String,
  },

})

const Job = mongoose.model( "job", CodingSchema)
module.exports = Job