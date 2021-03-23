import React from 'react'
import styledButton from './Button.module.css'

const Button = ({children}) => {
    return (
        <button className={styledButton.button}>
            {children}
        </button>
    )
}

export default Button
