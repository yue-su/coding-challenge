import React, { useState } from 'react'
import Image from './Image'
import styledProduct from './Product.module.css'
import Tag from './Tag'
import Colour from './Colour'

const Product = ({ product }) => {

  const { name, price, sizes, colors } = product
  
  const sizeStatusInit = {}
  sizes.forEach(size => sizeStatusInit[size] = true)

  const colourStatusInit = {}
  colors.forEach(colour => colourStatusInit[colour.id] = true)
    
  const [currentColor, setCurrentColor] = useState(colors[0])
  const [sizeStatus, setSizeStatus] = useState(sizeStatusInit)



    return (
      <div className={styledProduct.container}>
        <Image
          imageURL={currentColor.image.default}
          altText={currentColor.alt}
        />
        <div className={styledProduct.rightCol}>
          <h1>{name}</h1>
          <p>{price}</p>
          <h2>Size</h2>
          <div className={styledProduct.sizes}>
            {sizes.map((size) => (
              <Tag size={size} key={size} sizeStatus={sizeStatus[size]} />
            ))}
          </div>
          <hr />
          <h2>Colour</h2>
          <div>
            {colors.map((colour) => (
              <Colour key={colour.id} dark={colour.dark} light={colour.light} />
            ))}
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    )
}

export default Product
