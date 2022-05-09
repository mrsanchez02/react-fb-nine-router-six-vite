import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../context/UserProvider';

const Login = () => {

  const {setUser, user} = useContext(UserContext);
  const navigate = useNavigate()

  const handleClickLogin = () => {
    setUser(true)
    navigate('/')
  }


  return (
    <div>
      <h1>Login</h1>
      <h2>
        {
          user ? 'On line' : 'Offline'
        }
      </h2>
      <button onClick={()=>handleClickLogin()}>Acceder</button>
    </div>
  )
}

export default Login
