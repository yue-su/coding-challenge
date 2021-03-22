import React from 'react'
import styledTag from './Tag.module.css'

const Tag = ({size, sizeStatus, toggleSize}) => {
    
    return (
      <p
        style={{
          backgroundColor: sizeStatus ? "#f1f1f1" : "#1d1d1d",
          color: sizeStatus ? "#1d1d1d" : "#f1f1f1",
        }}
        className={styledTag.tag}
        onClick={() => toggleSize(size)}
      >
        {size}
      </p>
    )
        
    
}

export default Tag
