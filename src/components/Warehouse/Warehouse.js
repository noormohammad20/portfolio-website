import React from 'react'
import toy1 from '../../img/toy1.png'
import toy2 from '../../img/toy2.png'
import toy3 from '../../img/toy3.png'
const Warehouse = () => {
    return (
        <div className='manuCard'>
            <h1 style={{ textAlign: 'center' }}>Toy Warehouse</h1>
            <div className="cardImg">
                <img style={{ width: '250px', height: '150px', border: '1px solid gray' }} src={toy1} alt="" />
                <img style={{ width: '250px', height: '150px', border: '1px solid gray' }} src={toy2} alt="" />
                <img style={{ width: '250px', height: '150px', border: '1px solid gray' }} src={toy3} alt="" />
            </div>
            <p>

                <p className='cardDetails'>
                    <h3>Projects Details</h3>
                    <span>- this is full stack website .</span>
                    <span>- this website has a navbar. .</span>
                    <span>- and a awesome banner slider .</span>
                    <span>- and some toy for inventory management.</span>
                    <span>- and in blogs component.i answered three important questions.</span>
                    <span>- add item update quantity and manage item and lots of features.</span>
                    <span> - on the server side implement jwt token for secure api</span>
                    <span>- and use mongoDB as database</span>
                    <span> - and lots of api created for curd operations</span>
                </p>
            </p>
            <div className='links'>
                <a href="https://toy-warehouse.web.app/">Live site</a>
                <a href="https://github.com/noormohammad20/warehouse_management_website_client">Client Side Code</a>
                <a href="https://github.com/noormohammad20/warehouse_management_website_server">Server Side Code</a>
            </div>
        </div>
    )
}

export default Warehouse





