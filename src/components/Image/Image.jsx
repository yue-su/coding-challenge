import React, { useState } from "react"
import styledImage from "./Image.module.css"
import icon from "../../images/icon.svg"
import Modal from "../Modal/Modal"

const Image = ({ imageURL, altText }) => {
  const [zoom, setZoom] = useState(false)
  const [hover, setHover] = useState(false)

  const handleZoom = () => {
    setZoom((zoom) => !zoom)
  }
  return (
    <div>
      <div className={styledImage.container}>
        {hover && (
          <img
            src={icon}
            alt="zoom_icon"
            className={styledImage.zoom}
            onClick={handleZoom}
            onMouseEnter={() => setHover((hover) => !hover)}
          />
        )}
        <img
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          src={imageURL}
          alt={altText}
          className={styledImage.image}
        />
      </div>
      {zoom && <Modal image={imageURL} altText={altText} setZoom={setZoom} />}
    </div>
  )
}

export default Image
