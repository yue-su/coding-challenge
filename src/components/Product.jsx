import React, { useState } from 'react'
import Image from './Image'

const Product = ({ product }) => {

    const {name, price, size, color} = product
    
    const [currentColor, setCurrentColor] = useState(color[0])

    return (
      <div>
        <Image imageURL={currentColor.image.default} altText={currentColor.alt} />
        <div>
        <h1>{name}</h1>
        <p>{price}</p>
        </div>
      </div>
    )
}

export default Product
