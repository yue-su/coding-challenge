import React from 'react'
import styledColour from './Colour.module.css'

const Colour = ({ dark, light, toggleColour, colourId, colourStatus }) => {
    

    return (
        <div style={{
            border: colourStatus ? '2px solid #1d1d1d' : '2px solid #f1f1f1',
            borderRadius: '50%',
            padding: '3px',
        }}>
        <div
          className={styledColour.colour}
          onClick={() => toggleColour(colourId)}
          style={{
            borderRight: `15px solid ${light}`,
            borderTop: `15px solid ${dark}`,
            borderLeft: `15px solid ${dark}`,
            borderBottom: `15px solid ${light}`,
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        ></div>
      </div>
    )
}

export default Colour
