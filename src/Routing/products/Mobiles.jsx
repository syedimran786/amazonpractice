import React from 'react'
import { Link } from 'react-router-dom'
import mobilesdata from '../products/mobilesdata.js'

function Mobiles() {
  return (
    <div style={{display:"flex"}}>
      {mobilesdata.map((mobile)=>
      {
        return <Link to={`/products/mobiles/${mobile.mid}`} key={mobile.mid} style={{margin:"20px",width:"400px",padding:"10px",textAlign:"center"}}>
          <img style={{width:"100%",height:"50%"}} src={mobile.image} alt="" />
          {/* <h3>{mobile.name}</h3>
          <h6>Ram: {mobile.ram}  Price: {mobile.price}</h6> */}
        </Link>
      })}
    </div>
  )
}

export default Mobiles