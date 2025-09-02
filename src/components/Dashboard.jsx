// import Profile from "./Profile";

// const Dashboard=(props)=>{
//     return (
//         <>
//         <div>Dashboard Page - {props.user} 

//             <Profile user={props.user}/>


//         </div>
//         </>
//     )
// }
// export default Dashboard;

import { useContext } from "react";
import Profile from "./Profile";
import  UserContext  from "./UserContext";

const Dashboard=()=>{
       const data= useContext(UserContext);


    return (
        <>
        <div>Dashboard Page - {data}

            <Profile />


        </div>
        </>
    )
}
export default Dashboard;
