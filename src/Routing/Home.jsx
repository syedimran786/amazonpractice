import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  let [users,setusers]=useState([])
  let [user,setuser]=useState('')

let navigate=useNavigate()
  let changeUser=({target:{value}})=>
  {
    setuser(value)
  }

let getusers=async()=>
{
  let {data}=await axios.get("http://localhost:4000/users");
  console.log(data);
  setusers(data)
}
let addUser=async (e)=>
{
  let suser={id:Math.random(),name:user};

  let {data}=await axios.post("http://localhost:4000/users",suser);
  console.log(data)
  setusers([...users,data])
  // navigate("/")
  e.preventDefault();
}

let deleteUser=async (id)=>
{
 

await axios.delete(`http://localhost:4000/users/${id}`);
  
let newUsers=users.filter((fuser)=>
{
  return fuser.id!==id;
})
  setusers(newUsers)
 
}
useEffect(()=>
{
  getusers();
},[])

  return (
    <div>

      <form onSubmit={()=>(addUser())}>
        <input type="text" onChange={changeUser} />
        <button type='submit'>Add</button>
      </form>
      {users.map(({id,name,dept,age})=>
      {
        return <section key={id} style={{border:"2px solid red",margin:"20px",padding:"10px",width:"300px",textAlign:"center"}}>
          <h1>{name} {dept} {age} <button onClick={()=>(deleteUser(id))}>Delete</button></h1>
        </section>
      })}
    </div>
  )
}

export default Home