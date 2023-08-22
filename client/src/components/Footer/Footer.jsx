import React from "react";
import { ImFacebook2, ImLinkedin, ImTwitter } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons/lib";
import "./Footer.css";

const Footer = () => {
    const footerIcons = {
        color: "blue", 
        background: "white",
        borderRadius: "0.4rem"
    }

    return ( 
        <footer className="footer-container">
            <div className="footer-icons-container">
                <IconContext.Provider value={{ size: "2rem "}}>
                    <ImFacebook2 style={footerIcons}/>
                    <ImTwitter  style={{ color: "white", background: "blue", borderRadius: "0.4rem" }}/>
                    <ImLinkedin  style={footerIcons}/>
                    <FcGoogle/>
                </IconContext.Provider>
            </div>

            <div className="footer-text-container">
                <p>Información legal</p>
                <p>2023, Inmerse Tech Hub, S.A.</p>
            </div>
        </footer>
    );    
};

export default Footer;