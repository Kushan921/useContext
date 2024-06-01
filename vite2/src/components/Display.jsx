import React, { useContext } from 'react'
import {UserContext} from '../context/userContext'


const Display = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1>Use Context</h1>
        <p>username : {user?.username}</p>
        <p>password : {user?.password}</p>
    </div>
  )
}

export default Display