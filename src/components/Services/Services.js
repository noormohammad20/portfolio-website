import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './resume of noor_mohammad.pdf'
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
                <a href={Resume} download>
                    <button className='button s-button'>Download Resume</button>
                </a>

                <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right div */}
            <div className="cards">
                {/* first card  */}
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        details={'figma , adobe ,photoshop'}
                    />
                </div>
                {/* second card  */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        details={'figma , adobe ,photoshop'}
                    />
                </div>
                {/* third card  */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        details={'figma , adobe ,photoshop'}
                    />
                </div>
            </div>
            <div className='blur s-blur2' style={{ background: 'var--(purple)' }}></div>
        </div>
    )
}

export default Services