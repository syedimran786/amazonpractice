import React, { useEffect, useReducer } from 'react';
//! not possible to use useFetch here because usefetch built with usestate
let istate={
    users:[],
    loading:true,
    error:false
}

let reducer=(cstate,action)=>
{
    switch(action.type)
    {
        case "fetch":return {...cstate,users:action.payload, loading:false};
        case "error":return {...cstate, loading:false,error:true};
        default:return cstate
    }
    
}


function FetchUser1() {

    const [state, dispatch] = useReducer(reducer, istate);

    useEffect(() => {
      
        fetch("https://api.github.com/users").then((res)=>
        {
         if(res.status>=200 && res.status<=299)
         {
         return res.json();
     
         }
         else
         {

            dispatch({type:"error"})
            
         }
         return res.json();
        }).then((myusers)=>
        {
            dispatch({type:"fetch",payload:myusers})
         
        }).catch(e=>
         {
        console.log(e);
         })
         
          
         }, [])

    if(state.loading)
    {
        return <h1>Loading......</h1>
    }
    if(state.error)
    {
        return <h1>Error.....</h1>
    }

    return state.users?.map(({id,login,avatar_url})=>
        {
           return <li key={id}>{login} <img height={100} width={100} src={avatar_url} /></li>
        })
  
  
}

export default FetchUser1