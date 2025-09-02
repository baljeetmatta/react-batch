// const Sidebar=(props)=>{
//     return (
//         <>Sidebar: {props.user}</>
//     )
// }

import { useContext } from "react";
import UserContext from "./UserContext";

// export default Sidebar
const Sidebar=()=>{
    const data=useContext(UserContext);

    return (
        <>Sidebar:{data} </>
    )
}
export default Sidebar