import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { useAuth } from './auth'

import './Navbar.scss'

function Navbar() {
  return (
    <nav>
        {/* <NavLink className={({isActive})=>isActive?"active":"notactive"} to="/">Home</NavLink> */}
        <NavLink to="/">Home</NavLink>

        <NavLink to="products">Products</NavLink>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="images">Images</NavLink>
        <NavLink to="buttons">Buttons</NavLink>

        {!useAuth().user &&   <NavLink to="login1">Login1</NavLink> }
    </nav>
  )
}

export default Navbar