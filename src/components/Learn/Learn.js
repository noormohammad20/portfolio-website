import React from 'react'
import learn1 from '../../img/learn1.png'
import learn2 from '../../img/learn2.png'
import learn3 from '../../img/learn3.png'
const Learn = () => {
    return (
        <div className='manuCard'>
            <h1 style={{ textAlign: 'center' }}>Learn Arabic With Noor</h1>
            <div className="cardImg">
                <img style={{ width: '250px', height: '150px', border: '1px solid gray' }} src={learn1} alt="" />
                <img style={{ width: '250px', height: '150px', border: '1px solid gray' }} src={learn2} alt="" />
                <img style={{ width: '250px', height: '150px', border: '1px solid gray' }} src={learn3} alt="" />
            </div>
            <p>

                <p className='cardDetails'>
                    <h3>Projects Details</h3>
                    <span>- this website was created with react and react-bootstrap .</span>
                    <span>- this website has a navbar.</span>
                    <span> - and a sliding banner.</span>
                    <span> - and in blogs component ,i answered three important questions. </span>
                    <span> - and in about me component, I wrote something about myself.</span>
                    <span>- in this website implement lots of features .</span>
                    <span>- please explore those features on git hub code,and review for it.</span>
                </p>
            </p>
            <div className='links'>
                <a href="https://learn-arabic-with-noor.web.app/">Live site</a>
                <a href="https://github.com/noormohammad20/learn_arabic_with_noor_website">Github Code</a>
            </div>
        </div>
    )
}

export default Learn


