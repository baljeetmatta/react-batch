import { useState } from "react";

const Cform=()=>{
    const [name,setName]=useState("");
     const [city,setCity]=useState("");
      const [email,setEmail]=useState("");
    const nameHanlder=(e)=>{
        setName(e.target.value);

    }
    const cityHanlder=(e)=>{
        setCity(e.target.value);
        
    }
    const emailHanlder=(e)=>{
        setEmail(e.target.value);
        
    }
    const clickHandler=()=>{
        alert(name+""+city+""+email);

    }

    return(
        <div>
            <div>Name <input type="text" 
            onChange={nameHanlder} value={name}/></div>
            <div>City <input type="text"  onChange={cityHanlder} value={city}/></div>
            <div>Email <input type="text"  onChange={emailHanlder} value={email}/></div>
            <div><button onClick={clickHandler}>Save</button></div>
        </div>
    )
}
export default Cform;
