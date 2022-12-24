// import React, { useReducer, useState } from "react";

import { useReducer, useState } from "react"

// import "./Reduce.css"
// const  initialState = 0 ;

// const name = "This is really good app"
// const reducer = (state, action)=>{
//     if(action.type==="Increment"){
//         return state+1
//     }

//     if(action.type==="decrement"){
//         return  state-1
//     }

//     if(action.type==="data"){

//         return name
//     }
//     console.log(state,action)
//     return state;
// }

// const Reduce = ()=>{
//     // const [num , setNum] = useState(0)

//     const[state , dispatch] = useReducer(reducer, initialState)
//     return (
//         <div className="data">
//             <h1>{state}</h1>
//             <button onClick={()=>dispatch({type:"Increment"})}>Like </button><br /><br />
//             <button onClick={()=>dispatch({type:"decrement"})}>UnLike</button><br /><br />
//             <button onClick={()=>dispatch({type:"data"})}>Comment</button><br /><br />
//         </div>
//     )
// }

// export default Reduce



// HOw to use the useReducer


import React from "react"
import "./Reduce.css"


const  startingvalue = 0 
const name  ="sanjay ji this is good aap"
const reducer = (state, action)=>{
    console.log(state, action)
   if(action.type==="Like"){
    return state+1
   }
   
   if(action.type==="Unlike"){
    return state-1
   }

   if(action.type==="comment"){
    return name
   }
 
    return  state;
}

const Reduce =()=>{
    
    // const[num ,setNum] = useState(0)

     const[state, dispatch] = useReducer(reducer, startingvalue)

    const handler1 = ()=>{
        
        // setNum(num+1)

       dispatch({type:"Like"})
    }
    const handler2 = ()=>{
        
        // setNum(num-1)
        dispatch({type:"Unlike"})
    }
    const handler3 = ()=>{
        
        // setNum("This is good aap")
        dispatch({type:"comment"})
    }
   return(
    <div className="data">
   <h1>{state}</h1>
   <button onClick={handler1}>Like</button><br /> <br />
   <button onClick={handler2}>UnLike</button><br /><br />
   <button onClick={handler3}>Comment</button>
    </div>
   )
}

export default Reduce
