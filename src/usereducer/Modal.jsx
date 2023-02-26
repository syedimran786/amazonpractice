//! for usestate

// import React, { useEffect } from 'react'

// function Modal({modalcontent,setshowmodal}) {

//     // useEffect(() => {
      
//     //     setTimeout(()=>
//     //     {
//     //         setshowmodal(false)
//     //     },5000)
          
//     //     })
//   return (
//     <span>{modalcontent}</span>
//   )
// }

// export default Modal


//! for usereducer
import React, { useEffect } from 'react'

function Modal({modalcontent,closemodal}) {

    useEffect(() => {
      
        setTimeout(()=>
        {
            closemodal()
        },5000)
          
        })
  return (
    <span>{modalcontent}</span>
  )
}

export default Modal