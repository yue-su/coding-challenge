import React, { useState } from 'react'
import Image from '../Image/Image'
import styledProduct from './Product.module.css'
import Tag from '../Tag/Tag'
import Colour from '../Colour/Colour'
import Button from '../Button/Button'

const Product = ({ product }) => {

  const { name, price, sizes, colors } = product
  
  const sizeStatusInit = {}
  sizes.forEach(size => sizeStatusInit[size] = true)

  const colourStatusInit = {}
  colors.forEach(colour => {
    if(colour.id === '0') colourStatusInit[colour.id] = true
    else colourStatusInit[colour.id] = false
  })
    
  const [currentColor, setCurrentColor] = useState(colors[0])
  const [sizeStatus, setSizeStatus] = useState(sizeStatusInit)
  const [colourStatus, setColourStatus] = useState(colourStatusInit)

  const toggleSize = (size) => {
    const updatedStatus = {}
    for (let key of Object.keys(sizeStatus)) {
      if (key === size) updatedStatus[key] = false 
      else updatedStatus[key] = true
    }
    setSizeStatus(updatedStatus)
  }

  const toggleColour = (colourId) => {
    const updatedStatus = {}
    for (let key of Object.keys(colourStatus)) {
      if (key === colourId) updatedStatus[key] = true
      else updatedStatus[key] = false
    }
    setColourStatus(updatedStatus)
    setCurrentColor(colors[colourId])
  }


    return (
      <div className={styledProduct.container}>
        <Image
          imageURL={currentColor.image.default}
          altText={currentColor.alt}
        />
        <div className={styledProduct.rightCol}>
          <h2>{name}</h2>
          <p>{price}</p>
          <div className={styledProduct.section}>
            <h3>Size</h3>
            <div className={styledProduct.sizes}>
              {sizes.map((size) => (
                <Tag
                  size={size}
                  key={size}
                  sizeStatus={sizeStatus[size]}
                  toggleSize={toggleSize}
                />
              ))}
            </div>
          </div>
          <hr />
          <div className={styledProduct.section}>
            <h3>Colour</h3>
            <div className={styledProduct.colours}>
              {colors.map((colour) => (
                <Colour
                  key={colour.id}
                  dark={colour.dark}
                  light={colour.light}
                  colourId={colour.id}
                  colourStatus={colourStatus[colour.id]}
                  toggleColour={toggleColour}
                />
              ))}
            </div>
          </div>
          <div className={styledProduct.action}>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    )
}

export default Product
