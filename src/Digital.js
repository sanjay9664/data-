

import React, { useState } from "react";

const Digital =()=>{

    let time = new Date().toLocaleTimeString()

    const [data , setDate] = useState(time)
    let clr = "red"
    const [bg , setBg] = useState(clr)

    const [name , setName] = useState("USE ME ")

    const changehandler =()=>{
        setName("This is currnet time !")
        let newclr = "teal"

        setBg(newclr)

    }

     const dublechangehandler =()=>{
        setName("Welcome again current time  !")

        setBg("yellow")
     }

     const timehandler =()=>{
        
        let newTime = new Date().toLocaleTimeString()

        setDate(newTime)

        
       
     }


     setInterval(timehandler , 1000)

     
    return(
           
        <div  style={{backgroundColor:bg , padding:"40px" , textAlign:"center"}}>

                <h1  onClick={timehandler}>{data}</h1>
            <button  style={{padding:"10px 40px"}}  onMouseLeave={dublechangehandler} onMouseEnter={changehandler}>{name}</button>
        </div>
    )
}


export default Digital