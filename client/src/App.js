import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './applications/Router';

function App() {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter> 
    )   
}

export default App;
