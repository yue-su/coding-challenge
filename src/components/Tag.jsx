import React from 'react'
import styledTag from './Tag.module.css'

const Tag = ({size, sizeStatus}) => {
    
    return <p style={{backgroundColor: sizeStatus ? '#f1f1f1' : '#1d1d1d'}} className={styledTag.tag}>{ size}</p>
        
    
}

export default Tag
