import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Display from './components/Display'

function App() {
  

  return (
    <UserContextProvider>
      <div>
        <h1>Hello</h1>
        <Login/>
       <Display/>
      </div>
    </UserContextProvider>
  )
}

export default App
