// import { useState } from "react";

// const Login=()=>{
//     const [username,setUsername]=useState();
//     const usernameHandler=(e)=>{

//         setUsername(e.target.value);


//     }
//     const loginHandler=()=>{
//         console.log(username);
        
//     }
//     return (
//         <>
//         <div>
//             <div><label>Username</label><div><input value={username} onChange={usernameHandler}  type="text"/></div></div>
//             <div><label>Password</label><div><input type="password"/></div></div>
//             <div><button onClick={loginHandler}>Login</button></div>
//         </div>
//         </>
//     )
// }
// export default Login;

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const userRef=useRef();
    const passRef=useRef();


   
    const loginHandler=()=>{
        console.log("Login Called");
        setError("");
        setLoading(true);

       // console.log(username);
     //  console.log(userRef.current.value);
      // console.log(passRef.current.value);
      setTimeout(()=>{
      fetch("./Users.json")
      .then((response)=>{
        console.log(response);
        return response.json();
      }).then((response)=>{
          let result=  response.filter((item)=>{
                if(item.username==userRef.current.value && item.password==passRef.current.value)
                    return true;
            })
            console.log(result);
            setLoading(false);
            if(result.length==0)
            {

                setError("Invalid user/password");
            }
            else
            {
                    navigate("/dashboard");


            }


      })},3000);
      

        
    }
    return (
        <>
        <div>
            {error}
            <div><label>Username</label><div><input ref={userRef}  type="text"/></div></div>
            <div><label>Password</label><div><input ref={passRef} type="password"/></div></div>
            <div><button disabled={loading} onClick={loginHandler}>{loading?"loading":"Login"}</button></div>
        </div>
        </>
    )
}
export default Login;