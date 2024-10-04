import React, { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from "./Components/Login.jsx"
import Profile from "./Components/Profile.jsx"

function App() {

  console.log("Check from App")
  return (
    <>
      <UserContextProvider>
      <h1>React with Chai and Code</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
