import React from 'react'
import './Intro.css'
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy1 from "../../img/boy1.png"
import glassesimoji from "../../img/glassesimoji.png"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"

import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Resume from './resume of noor_mohammad.pdf'
import { motion } from 'framer-motion'

const Intro = () => {
    const transition = { duration: 2, type: 'spring' }
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hey! I Am</span>
                    <span>Noor Mohammad</span>
                    <span>JavaScript developer with knowing some framework for the frontend and the backend</span>
                </div>

                <a href={Resume} download className='button i-button'>Download Resume</a>

                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy1} alt="" />

                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji}
                    alt=""
                />

                <motion.div
                    initial={{ top: "-4", left: '74%' }}
                    whileInView={{ left: "68%" }}
                    transition={transition}

                    className="floating-div"
                    style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv
                        image={crown}
                        text1="JavaScript"
                        text2="Developer"
                    />
                </motion.div>

                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}

                    className="floating-div"
                    style={{ top: '23rem', left: '0.5rem' }}>
                    <FloatingDiv
                        image={thumbup}
                        text1="MERN STack"
                        text2="Developer"
                    />
                </motion.div>
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