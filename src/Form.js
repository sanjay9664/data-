


// import React, { useState } from "react";

// import "./Form.css"

// const Form =()=>{
//     const[name, setName] =  useState("")
//     const[fullname,setFullname] =useState()
//     const[lastname, setLastname] = useState('')
//     const[last , setLast] = useState('')
   
//     const onSubmit =(evnet)=>{
//       evnet.preventDefault()
//         setFullname(name)
//         setLastname(lastname)
//     }


//     const handler =(evnet)=>{
//         // console.log(evnet.target.value)

//         setName(evnet.target.value)                      
//     }

//     const secondhandler =(evnet)=>{

//         setLast(evnet.target.value)
//     }
// return (

   
//     <div className="container">
//      <form onSubmit={onSubmit}>
//         <h1>Hello {fullname} {last}</h1>
//         <input type="text" value={name} onChange={handler} placeholder="Please Enter your name" /><br /><br />
//         <input type="text" value={last} onChange={secondhandler} placeholder="Please Enter your name" /><br /><br />
//         <button  type="submit">Use me</button>
//         </form>
//     </div>
// )
// }

// export default Form ;


import React, { useState } from "react";
import "./Form.css"

const  Form = ()=>{
    
   const [name , setName] = useState("")

   const [firstname, setFirstname] = useState('')

  const[last , setLast] =useState('')

  const [lastname ,setLastname] = useState('')

    const inputFirst =(event)=>{
    
        setName(event.target.value)
    }

    const inputsecond =(evnet)=>{
        setLast(evnet.target.value)
    }

    const onSubmit= (event)=>{
      event.preventDefault()
        setFirstname(name)
        setLastname(last)
        
    }
    return (
        <div className="container">
        <form onSubmit={onSubmit}>
         <h1>Hellow { firstname} {lastname}</h1>
         <input type="text" value={name} onChange={inputFirst} placeholder="Please Enter your name !" /><br /><br />
         <input type="text" value={last} onChange={inputsecond} placeholder="Please Enter your name !" /><br /><br />
         <button type="submit">Click me</button>
         </form>
        </div>
    )
}
export default Form; 