import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth'

function ProtectedProfile({children}) {
    let auth=useAuth();

    let location=useLocation();
    console.log(location)

    if(!auth.user)
    {
        return <Navigate to="/login1" state={{path:location.pathname}}/>
    }
  return (
    children
  )
}

export default ProtectedProfile