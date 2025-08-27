import {  useState } from "react";

const Effect = () => {
  const [count,setCount]=useState(1);
    const clickHandler=()=>{
            setCount(count+1);

    }
    console.log("called");


    return (
        <>
            Counter: {count} 
            <button onClick={clickHandler}>Click</button>

        </>
    )
}
export default Effect;
