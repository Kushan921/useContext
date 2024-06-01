import React, { useContext, useState } from 'react';
import {UserContext} from '../context/userContext';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext)

    const handleusername = (e) => {
        setUsername(e.target.value)
        setUser({username:e.target.value,password})
    }
    const handlepassword = (e) => {
        setPassword(e.target.value)
        setUser({password:e.target.value,username})
    }
    return (
        <div>
            <input type="text" value={username} onChange={handleusername} />
            <input type="text" value={password} onChange={handlepassword} />
        </div>
    )
}

export default Login;
