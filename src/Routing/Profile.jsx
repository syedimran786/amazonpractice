import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Profile() {
  let auth=useAuth()
  let navigate=useNavigate()

let logoutuser=()=>
{
  auth.logout();
  navigate('/')
}

  return (
    <div>
      <h1>{auth.user}</h1>
      <button onClick={logoutuser}>Logout</button>
    </div>
  )
}

export default Profile