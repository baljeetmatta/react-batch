// // import React, { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import Greet from './components/Greet'
// // import Button from "./components/Button"
// // import GreetClass from './components/GreetClass'
// // import ButtonClass from './components/ButtonClass'
// // import State from './components/State'
// // import StateClass from './components/StateClass'
// // import FormControls from './components/FormControls'
// // import Cform from './components/Cform'
// // import Forms from './components/Forms'
// // function App() {

// //   const clientHandler=()=>{
// //     alert("My Message from user");

// //   }
// //   const clientHandlerAnother=(e)=>{
// //     alert(e.target.innerText)
// //   }
// //   return (
// //   <>
// //     {/* <Greet name="Talents" value="Ok"/>
// //    <Greet name="Code" value="Send"/> */}
// //    {/* <Button value="OK" click={clientHandler} title="Send Button for testing"/>
// //    <Button value="Send" click={clientHandlerAnother} title="Change Password"/> */}
// //    {/* <GreetClass name="Code"/> */}
// //    {/* <ButtonClass value="Send" click={clientHandler}/> */}
// //    {/* <StateClass/> */}
// //    {/* <FormControls/> */}
// //    {/* <Cform/> */}
// //    <Forms/>





// //     </>
// //   )

// // }

// // export default App
// import { Routes, Route, Outlet } from "react-router-dom";
// import Home from "./components/site/Home";

// import "./index.css"
// import Contact from "./components/site/Contact";
// import About from "./components/site/About";
// import Navbar from "./components/site/Navbar";
// import { useNavigate } from "react-router-dom";
// import Details from "./components/site/Details";
// import Products from "./components/site/Products";
// import MasterLayout from "./components/site/MasterLayout";
// const App = () => {
  
//   const navigate=useNavigate();

//   return (
//     <>
//       Application Page
//       <Navbar />

//       <button onClick={()=>{
//         //let x="adasd";
//         navigate("/contact/",{state:{name:"ABC",age:20}});


//         }} >Contact</button>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/demo" element={<div>Demo Page</div>} />
//         <Route path="/details/:city" element={<Details/>} />
//         {/* <Route path="/products/">
//           <Route path="electronics" element={<div>Electronics page</div>} />
//           <Route path="mobiles" element={<div>Mobile page</div>} />
//           <Route path="clothes" element={<div>Clothes page</div>} />
//         </Route> */}
//         {/* <Route path="/products/:category" element={<Products/>}/> */}
// <Route path="/products/" element={<div>New Parent<Outlet/></div>}>
//           <Route path="electronics" element={<div>Electronics page</div>} />
//           <Route path="mobiles" element={<div>Mobile page</div>} />
//           <Route path="clothes" element={<div>Clothes page</div>} />
//         </Route> 


//       </Routes>
     
//     </>
//   )
// }
// export default App;
//LIST AND KEYS
import { useState } from "react";
import "./test.css"
const App=()=>{

  const items=["First","Second","Third","Fourth"];
  //let selectedIndex=-1;
  const [selectedIndex,setIndex]=useState(-1);

  const clickHandler=(index)=>{
   // selectedIndex=index;
   // console.log(selectedIndex);
    setIndex(index);

   

  }
  return (
    <>
    List of Items
    <ul>
      {
          //for,foreach,map
          items.map((item,index)=>{
            return <li className={selectedIndex==index?"active":""} onClick={()=>clickHandler(index)} key={index}>{item}</li>
          })

      }
      
    </ul>
    </>
  )


}
export default App;

