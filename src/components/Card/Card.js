import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
const Card = ({ id, emoji, heading, details, live }) => {
    const navigate = useNavigate()

    const navigateToProjectDetail = id => {
        navigate(`/project/${id}`)
    }
    return (
        <div className='card'>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{details}</span>
            <button className="c-button">{live}</button>
            <button onClick={() => navigateToProjectDetail(id)}> Details</button>
        </div>
    )
}

export default Card