import React from 'react'
import { images } from './images.js'
import PropTypes from 'prop-types'

function Images() {
    return (
        <>
            {images.map((image, i) => {
                return <Image {...image} key={i} />
            })}
        </>
    )
}


function Image({ name, myimages: { imgurl } }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={imgurl} height="100px" width="100px" />
        </div>
    )
}


//   Image.defaultProps=
//   {
//     name:"NO Name",
//     myimages:{imgurl:"https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=600"}
//   }
Image.propTypes =
{
    name: PropTypes.string.isRequired,
    myimages: PropTypes.object.isRequired
}
export default Images


