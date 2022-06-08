import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
const Services = () => {
    return (
        <div className='services'>
            {/* left div */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>I'm basically a front-end developer
                    <br />
                    but i can also do server side work with node expressJs and mongoDB </span>
                <button className='button s-button'>Download Resume</button>
                <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right div */}
            <div className="cards">
                I am Right Side
            </div>

        </div>
    )
}

export default Services