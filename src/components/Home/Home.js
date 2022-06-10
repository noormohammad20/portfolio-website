import React from 'react'
import './Home.css'
import Navbar from "../Navbar/Navbar"
import Intro from "../Intro/Intro"
import Services from "../Services/Services"
import Experience from "../Experience/Experience"
import Works from "../Works/Works"
import Portfolio from "../Portfolio/Portfolio"
import Testimonial from "../Testimonials/Testimonial"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
const Home = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <Services />
            <Experience />
            {/* <Works /> */}
            <Portfolio />
            {/* <Testimonial /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default Home