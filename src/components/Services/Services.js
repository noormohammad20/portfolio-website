import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import { motion } from 'framer-motion'
const Services = () => {
    const transition = { duration: 1, type: 'spring' }
    return (
        <div className='services' id='Services'>
            {/* left div */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Projects</span>
                <span style={{ fontSize: '22px' }}>I'm basically a front-end developer
                    <br />
                    but i can also do server side work with node expressJs and mongoDB
                    <br />
                    hare i am showing some of the projects i have created.
                </span>

                <button className='button s-button'>Hire Me</button>


                <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right div */}
            <div className="cards">
                {/* first card  */}
                <motion.div
                    initial={{ left: "25" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Computer Parts Manufacturer'}
                        details={'Using: ReactJS, Firebase, Node JS, MongoDB, Express, etc'}
                        live={<a style={{ textDecoration: 'none' }} href='https://computerpartsmanufacturer.web.app/'>Live Project</a>}
                    />
                </motion.div>
                {/* second card  */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Toy Warehouse'}
                        details={'Using: React JS, React Router, React Bootstrap, Axios, Firebase, Node JS, Mongo DB, Express, etc.'}
                        live={<a style={{ textDecoration: 'none' }} href='https://toy-warehouse.web.app/'>Live Project</a>}
                    />
                </motion.div>
                {/* third card  */}
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}

                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'Learn With Noor'}
                        details={'Using: React Bootstrap, React JS, React Router, React Toastify, Firebase, etc.'}
                        live={<a style={{ textDecoration: 'none' }} href='https://learn-arabic-with-noor.web.app/'>Live Project</a>}
                    />
                </motion.div>
            </div>
            <div div className='blur s-blur2' style={{ background: 'var--(purple)' }
            }></div >
        </div >
    )
}

export default Services