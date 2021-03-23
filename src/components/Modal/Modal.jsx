import React from "react"
import styledModal from "./Modal.module.css"

const Modal = ({ image, altText, setZoom }) => {
  return (
    <div className={styledModal.modal}>
      <span
        className={styledModal.close}
        onClick={() => {
          setZoom((zoom) => !zoom)
        }}
      >
        X
      </span>
      <img src={image} alt={altText} className={styledModal.image} />
    </div>
  )
}

export default Modal
