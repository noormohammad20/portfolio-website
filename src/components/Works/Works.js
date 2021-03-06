import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { motion } from 'framer-motion'

const Works = () => {
    return (
        <div className='works' id='Works'>
            {/* left div */}
            <div className="awesome">
                <span>Works For All This</span>
                <span>Brand and Client</span>
                <span>I'm basically a front-end developer
                    <br />
                    but i can also do server side work with node expressJs and mongoDB
                    <br />
                    but i can also do server side work with node expressJs and mongoDB
                    <br />
                    but i can also do server side work with node expressJs and mongoDB
                </span>

                <button className='button s-button'>Hire Me</button>

                <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right div  */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle"
                >
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>

                </motion.div>
                {/* background circle  */}
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>
        </div >
    )
}

export default Works