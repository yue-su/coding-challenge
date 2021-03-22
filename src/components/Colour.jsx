import React from 'react'
import styledColour from './Colour.module.css'

const Colour = ({ dark, light, toggleColour, colourId, colourStatus }) => {
    
    return (
        <div
            className={styledColour.colour}
            onClick={() => toggleColour(colourId)}
            style={{border: colourStatus ? '2px solid black' : null}}
            >
            {dark} - {light}
        </div>
    )
}

export default Colour
