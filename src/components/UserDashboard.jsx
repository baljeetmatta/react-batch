// import Dashboard from "./Dashboard"
// import Sidebar from "./Sidebar"
// const UserDashboard=()=>{


//     let data="Username";

//     return (
//         <>
//         <Dashboard user={data}/>
//         <Sidebar user={data}/>


//         </>
//     )
// }
// export default UserDashboard;

import UserContext from "./UserContext"
import Dashboard from "./Dashboard"
import Sidebar from "./Sidebar"
const UserDashboard=()=>{


    let data="Username";

    return (
        <>
        <UserContext.Provider value={data}>

        
        <Dashboard />
        <Sidebar/>

        </UserContext.Provider>


        </>
    )
}
export default UserDashboard;

