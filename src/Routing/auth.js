import React,{createContext, useContext, useState} from 'react'

let AuthContext=createContext(null)

function AuthProvider({children}) 
{
    let [user,setUser]=useState(null);

    let login=(user)=>{
        setUser(user)
    }

    let logout=()=>{
        setUser(null)
    }
// console.log(children);

  return (
   <AuthContext.Provider value={{user,login,logout}}>
    {children}
   </AuthContext.Provider>
  )
}

export let useAuth=()=>
{
    return useContext(AuthContext)
}

export default AuthProvider