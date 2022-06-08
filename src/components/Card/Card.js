import React from 'react'
import './Card.css'
const Card = ({ emoji, heading, details, live }) => {
    return (
        <div className='card'>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{details}</span>
            <button className="c-button">{live}</button>
        </div>
    )
}

export default Card