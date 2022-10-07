import React from 'react'
import {useState} from "react"
import axios from 'axios';


function Input() {
  
  const [code , setCode] = useState("");
  const [language , setLanguage] = useState("");


  const handleSubmit = async(e) =>{
    const payload = {
      language,
      code
    }
    try{
      const {data} = await axios.post("http://localhost:3001/run",payload,{
        headers:{
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
       })
       console.log(data)
    }catch(err){
      console.log(err.message)
    }
    
     //console.log(data)

    
    }
    

  return (
    <div>
  
    <form action=''>
      <lable>Language</lable>
      <input type= "text" onChange={(e)=>{setLanguage(e.target.value)}} />
      <br/>
      <label>Code</label>
      <textarea onChange={(e)=>{setCode(e.target.value)}} ></textarea>
      <br/>
      <input type = "button"  value= "submit" onClick={handleSubmit} />
    </form>

    </div>
  )
}

export default Input