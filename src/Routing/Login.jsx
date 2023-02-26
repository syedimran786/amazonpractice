import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setlogindata}) {

  let [loginForm, setloginform] = useState({ username: '', password: '' })
let navigate=useNavigate()


  let changeloginform = ({ target: { value, name } }) => {
    setloginform({ ...loginForm, [name]: value })
  }
//! usenavigate
  let submitForm=(e)=>
  {
    setlogindata(loginForm)
    setloginform({ username: '', password: '' });
    navigate('/dashboard')
    
    e.preventDefault()
  }
  return (
    <div>
      <form method='post' onSubmit={submitForm} style={{margin:"100px 100px"}}>
        <input type="text" name='username' onChange={changeloginform} value={loginForm.username} />
        <input type="text" name='password' onChange={changeloginform} value={loginForm.password} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Login