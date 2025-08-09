// import React, { useState } from 'react';
// //Functional Compoenent->State management 
// //Class COmponenet->
// //Functional Component->State->Hooks
// const State=()=>{
//     //console.log(useState());//1 variable, object
//     //1 variable data, variable
//     //2. Change, print
//     //1. Variable Value->store
//     //2. Function
//     //let arr=useState(0);
//     //arr[0]->variable
//     //arr[1]->function arr[1](20);
//     //Destructuring -> Array
//     let [counter,setCounter]=useState(0);
//     //counter ->State variable
//     //setCounter ->State variable ->change->Re-render

//     let count=1;

//     const clickHandler=()=>{
//         count=count+1;
//         console.log(count);
//     }
//     return (
//         <>
//             Count :{count}
//             <button onClick={clickHandler}>Change</button>

//         </>
//     )
// }
// export default State;

import React, { useState } from 'react';
//Functional Compoenent->State management 
//Class COmponenet->
//Functional Component->State->Hooks
const State=()=>{
    //console.log(useState());//1 variable, object
    //1 variable data, variable
    //2. Change, print
    //1. Variable Value->store
    //2. Function
    //let arr=useState(0);
    //arr[0]->variable
    //arr[1]->function arr[1](20);
    //Destructuring -> Array
    const [counter,setCounter]=useState(0);
    //counter ->State variable
    //setCounter ->State variable ->change->Re-render

    let count=1;

    const clickHandler=()=>{
       //counter++;
       count++;
      // console.log(counter);
      setCounter(counter+1);
      //1, Async 
      console.log(counter);

    }
    return (
        <>

            Count :{counter} - {count} -{counter}
            <button  onClick={clickHandler}>Change</button>
            {counter}

        </>
    )
}
export default State;
