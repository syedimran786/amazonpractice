import React from 'react'
import { useParams } from 'react-router-dom'
import mobilesdata from './products/mobilesdata'

function Details() {
  //! useparams
  let { productId } = useParams();
  let mobiledata=mobilesdata.find(({mid})=>
  {
    return  parseInt(productId)===mid
  })


  console.log(mobiledata);
  let {image,name,price,ram}=mobiledata



  console.log(productId)
  return (
    <div  style={{margin:"20px",width:"500px",padding:"10px", height:"900px",textAlign:"center"}}>
      <img src={image} alt="" style={{width:"100%",height:"50%"}} />
       <h3>{name}</h3>
        <h6>Ram: {ram}  Price: {price}</h6>
    </div>
  )
}

export default Details