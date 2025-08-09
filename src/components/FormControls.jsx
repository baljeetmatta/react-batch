import { useState } from "react";

const FormControls=()=>{

    const [name,setName]=useState("Demo");

    let nameText="demo";
    let age="";

    const nameHandler=(e)=>{
          nameText=  e.target.value;
          console.log(nameText);
          setName(e.target.value);


    }
    const clickHandler=()=>{
        //alert(nameText);
        console.log(nameText,age)

    }
    const ageHandler=(e)=>{
        age=e.target.value;
        
    }

    return(

        <div>
            <input type="text" value={name} onChange={nameHandler}/>
            <input type="text" onChange={ageHandler}/>
            <div>your name is {name}</div>
            <button onClick={clickHandler}>Click </button>
        </div>
    )
}
export default FormControls;
