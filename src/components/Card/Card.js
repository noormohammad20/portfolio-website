import React from 'react'
import './Card.css'
const Card = ({ id, emoji, heading, details, detailsButton }) => {
    return (
        <div className='card'>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{details}</span>
            <span>{detailsButton}</span>
        </div>
    )
}

export default Card