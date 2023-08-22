import React from "react";
import "./MainHome.css";
import JacinemiAvatar from "../../assets/Jacinemi-Avatar.png";
import AlexAvatar from "../../assets/Alex- Avatar.png";
import MiguelAvatar from "../../assets/Miguel-Avatar.png";
import VirginiaAvatar from "../../assets/Virginia-Avatar.png";
import { Link } from 'react-router-dom';

const MainHome = () => {
    return ( 
        <main>
            <p className="main-info">Para más información, selecciona el curso de tu preferencia</p>

            <div className="main-container">
                <Link to="/contactanos" className="main-link-style">
                    <div className="main-home-card">
                        <img src={JacinemiAvatar}alt="trainer-avatar"/>
                        <h4>Jacinemi Urquiola</h4>
                        <p>Css: Conceptos básicos</p>
                    </div>
                </Link>

                <Link to="/contactanos" className="main-link-style">
                    <div className="main-home-card">
                        <img src={AlexAvatar}alt="trainer-avatar"/>
                        <h4>Alex López</h4>
                        <p>HTML: Conceptos básicos.</p>
                    </div>
                </Link>

                <Link to="/contactanos" className="main-link-style">
                    <div className="main-home-card">
                        <img src={MiguelAvatar} alt="trainer-avatar"/>
                        <h4>Miguel Seiz</h4>
                        <p>Aprende a usar Mongo DB.</p>
                    </div>
                </Link>

                <Link to="/contactanos" className="main-link-style">
                    <div className="main-home-card">
                        <img src={VirginiaAvatar} alt="trainer-avatar"/>
                        <h4>Virginia Santana</h4>
                        <p>Iniciación en JAVASCRIPT</p>
                    </div>
                </Link>
            </div>
        </main>
    );    
};

export default MainHome;