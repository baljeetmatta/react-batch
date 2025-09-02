// const Profile=(props)=>{
//     return (
//         <>
//         {props.user}
//         </>
//     )
// }
// export default Profile;

import { useContext } from "react";
import UserContext from "./UserContext";

const Profile=()=>{
    const data=useContext(UserContext);
    return (
        <>
        Profile -{data}
        </>
    )
}
export default Profile;
