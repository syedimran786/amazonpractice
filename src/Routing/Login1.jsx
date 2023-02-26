import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

function Login1() {
    let [user, setuser] = useState('')

    let auth=useAuth()
    let location=useLocation();
    let path=location.state?.path || "/";
    console.log(path)
    let navigate=useNavigate()
    
    
      let changeloginform = ({ target: { value} }) => {
        setuser(value)
      }
    //! usenavigate
      let submitForm=(e)=>
      {
        auth.login(user)
        // navigate('/',{replace:true})
        navigate(path,{replace:true})

        
        e.preventDefault()
      }
      return (
        <div>
          <h1>plaese login</h1>
          <form method='post' onSubmit={submitForm} style={{margin:"100px 100px"}}>
            <input type="text" name='username' onChange={changeloginform} value={user} />
            <button type='submit'>submit</button>
          </form>
        </div>
      )
}

export default Login1