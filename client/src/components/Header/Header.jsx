import React from "react";  
import "./Header.css";
//import Background from '../../assets/empty-background-header.png';
import Hack from "../../assets/48h-small-logo.png";
import Logo from "../../assets/circular-logo-header.png";


const Header = () =>{
    return (<header>
            <div id="elements-container">
            <div className="div-text">
                <img className="div-logo"src={Logo} alt="Company logo"/>
                <div className="titles">
                <h1>INMERSE TECH HUB</h1>
                <h2>¡COMPARTE TU LUZ, ILUMINA EL MUNDO!</h2>
                <div className="div-team-logo">
                <p>POWERED BY</p>
                <img src={Hack} alt="Team Logo"/>
            </div>
                </div>
            </div>
            
            </div>
        </header>) 
}
export default Header;