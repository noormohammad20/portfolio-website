import React from 'react'
import './Intro.css'
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import glassesimoji from "../../img/glassesimoji.png"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"

import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I Am</span>
                    <span>Noor Mohammad</span>
                    <span>JavaScript developer with knowing some framework for the frontend and the backend</span>
                </div>
                <button className="button i-button">Hire me</button>

                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv
                        image={crown}
                        text1="JavaScript"
                        text2="Developer"
                    />
                </div>

                <div style={{ top: '23rem', left: '0.5rem' }}>
                    <FloatingDiv
                        image={thumbup}
                        text1="MERN STack"
                        text2="Developer"
                    />
                </div>
                {/* Blur Div */}
                <div className='blur' style={{ background: 'rgb(238,210,255)' }}>
                </div>
                <div className='blur' style={{ background: '#C1F5FF', top: '17rem', left: '-9rem', width: '21rem', height: '11rem' }}>
                </div>
            </div>
        </div>
    )
}

export default Intro