import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './applications/Router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Router />
        <Footer />
    </BrowserRouter>
  );
}

export default App;

