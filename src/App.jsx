import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet'
import Button from "./components/Button"
import GreetClass from './components/GreetClass'
import ButtonClass from './components/ButtonClass'
import State from './components/State'
import StateClass from './components/StateClass'
import FormControls from './components/FormControls'
import Cform from './components/Cform'
function App() {
 
  const clientHandler=()=>{
    alert("My Message from user");

  }
  const clientHandlerAnother=(e)=>{
    alert(e.target.innerText)
  }
  return (
  <>
    {/* <Greet name="Talents" value="Ok"/>
   <Greet name="Code" value="Send"/> */}
   {/* <Button value="OK" click={clientHandler} title="Send Button for testing"/>
   <Button value="Send" click={clientHandlerAnother} title="Change Password"/> */}
   {/* <GreetClass name="Code"/> */}
   {/* <ButtonClass value="Send" click={clientHandler}/> */}
   {/* <StateClass/> */}
   {/* <FormControls/> */}
   <Cform/>




    </>
  )
  
}

export default App
