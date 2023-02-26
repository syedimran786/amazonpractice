import React from 'react'
import myimages from './myimages'

myimages.splice(10,1000)
function Images() {
  return (
    <div>
        {myimages.map(({url,id})=>
        {
            return <img style={{height:"100px",width:"100px",margin:"10px"}} key={id} src={url} alt="" />
        })}
    </div>
  )
}

export default Images