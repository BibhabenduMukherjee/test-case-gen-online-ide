const {v4 : uuid} = require("uuid")
const path = require("path")
const fs = require("fs")

const pathCodeToSave = path.join(__dirname , "codes")

if(!fs.existsSync(pathCodeToSave)){
    fs.mkdirSync(pathCodeToSave , {recursive : true})
}

const generateFile = async (formate , code) =>{
 const uniqueName = uuid();
  const fileName = `${uniqueName}.${formate}`
  const filePath = path.join(pathCodeToSave , fileName)
  await fs.writeFileSync(filePath , code)
  return filePath
}

module.exports = generateFile