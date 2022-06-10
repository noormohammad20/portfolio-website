import React from 'react'
import './ManufacturerDetails.css'
import manu1 from '../../img/manu1.png'
import manu2 from '../../img/manu2.png'
import manu3 from '../../img/manu3.png'
const ManufacturerDetails = () => {
    return (
        <div className='manuCard'>
            <h1 style={{ textAlign: 'center' }}>Computer Parts Manufacturer</h1>
            <div className="cardImg">
                <img style={{ width: '300px', border: '1px solid gray' }} src={manu1} alt="" />
                <img style={{ width: '300px', border: '1px solid gray' }} src={manu2} alt="" />
                <img style={{ width: '300px', border: '1px solid gray' }} src={manu3} alt="" />
            </div>
            <p>

                <p className='cardDetails'>
                    <h3>Projects Details</h3>
                    <span>- this is full stack website .</span>
                    <span>- this website has a navbar.</span>
                    <span> - and a awesome banner.</span>
                    <span>- and some products which we make.</span>
                    <span> - and in blogs component . i answered five questions.</span>
                    <span>- in this website implement lots of features .</span>
                    <span>- please explore those features on git hub code,and review for it.</span>

                    <span> - on the server side implement jwt token for secure api</span>
                    <span>- implement stripe for payment system</span>
                    <span> - and lots of api created for curd operations</span>
                </p>
            </p>
            <div className='links'>
                <a href="https://computerpartsmanufacturer.web.app/">Live site</a>
                <a href="https://github.com/noormohammad20/computer_parts_manufacturer_website_client">Client Side Code</a>
                <a href="https://github.com/noormohammad20/computer_parts_manufacturer_website_server">Server Side Code</a>
            </div>
        </div>
    )
}

export default ManufacturerDetails