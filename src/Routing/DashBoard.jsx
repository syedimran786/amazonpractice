import React from 'react'

function DashBoard({logindata:{username,password}}) {

    console.log(username,password);
  return (
    <div>
        <h1>Username: {username} Password: {password}</h1>
    </div>
  )
}

export default DashBoard