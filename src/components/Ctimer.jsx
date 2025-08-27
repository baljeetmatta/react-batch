import { useEffect, useState } from "react";
const Ctimer=()=>{
    const [counter,setCounter]=useState(1);


    const changeHandler=()=>{
        setCounter(counter+1);
      //  console.log("called");

    }

   // console.log("Called..");
   //setTimeout(changeHandler,1000);//1,1,1,1,1,1,1,1
   //Life Cycle ->Class, 
   //Hooks, useEffect->Classs->ComponentDidMount
   useEffect(()=>{
    //Mount, Re-Render
    let id=setInterval(changeHandler,1000);
    return ()=>clearInterval(id);


   },[counter])//dependency array list of varialbes ->useEffect

   //called for any state varaible change
   // []->Once 


    return (
        <div>
            Count:{counter}
            <button onClick={changeHandler}>Change</button>

        </div>
    )
}
export default Ctimer;