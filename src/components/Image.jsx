import React from 'react'
import styledImage from './Image.module.css'

const Image = ({imageURL, altText}) => {
    return (
        <img src={imageURL} alt={altText} className={ styledImage.image}/>
    )
}

export default Image
