import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'


function Products() {
  return (
    <div>
       <nav style={{backgroundColor:"orangered"}}>
        <NavLink to="mobiles">Mobiles</NavLink>
        <NavLink to="laptops">Laptops</NavLink>
        <NavLink to="watches">Watches</NavLink>
    </nav>
//!outlet
    <main>
      <Outlet/>
    </main>
    </div>
  )
}

export default Products