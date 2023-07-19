import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './applications/Routes';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Routes/>
            <Footer/>
        </BrowserRouter> 
    )   
}

export default App;
