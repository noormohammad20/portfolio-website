import React from "react"
import "./Footer.css"
import Wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Gitub from "@iconscout/react-unicons/icons/uil-github"

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span style={{ marginTop: '100px', fontWeight: 'bold' }}>Copyright © 2022 - All right reserved by Noor Mohammad</span>
                <span>noor.mohammad7@yahoo.com</span>
                <div className="f-icons">
                    <Insta color="white" size={"3rem"} />
                    <a href="https://www.facebook.com/NoorMohammad204">
                        <Facebook color="white" size={"3rem"} />
                    </a>
                    <a href="https://github.com/noormohammad20">
                        <Gitub color="white" size={"3rem"} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
