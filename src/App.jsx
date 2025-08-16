// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Greet from './components/Greet'
// import Button from "./components/Button"
// import GreetClass from './components/GreetClass'
// import ButtonClass from './components/ButtonClass'
// import State from './components/State'
// import StateClass from './components/StateClass'
// import FormControls from './components/FormControls'
// import Cform from './components/Cform'
// import Forms from './components/Forms'
// function App() {

//   const clientHandler=()=>{
//     alert("My Message from user");

//   }
//   const clientHandlerAnother=(e)=>{
//     alert(e.target.innerText)
//   }
//   return (
//   <>
//     {/* <Greet name="Talents" value="Ok"/>
//    <Greet name="Code" value="Send"/> */}
//    {/* <Button value="OK" click={clientHandler} title="Send Button for testing"/>
//    <Button value="Send" click={clientHandlerAnother} title="Change Password"/> */}
//    {/* <GreetClass name="Code"/> */}
//    {/* <ButtonClass value="Send" click={clientHandler}/> */}
//    {/* <StateClass/> */}
//    {/* <FormControls/> */}
//    {/* <Cform/> */}
//    <Forms/>





//     </>
//   )

// }

// export default App
import { Routes, Route } from "react-router-dom";
import Home from "./components/site/Home";

import "./index.css"
import Contact from "./components/site/Contact";
import About from "./components/site/About";
import Navbar from "./components/site/Navbar";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate=useNavigate();

  return (
    <>
      Application Page
      <Navbar />

      <button onClick={()=>{navigate("/contact")}} >Contact</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<div>Demo Page</div>} />
        <Route path="/products/">
          <Route path="electronics" element={<div>Electronics page</div>} />
          <Route path="mobiles" element={<div>Mobile page</div>} />
          <Route path="clothes" element={<div>Clothes page</div>} />
        </Route>

      </Routes>
    </>
  )
}
export default App;