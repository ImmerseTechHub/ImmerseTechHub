import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './applications/Router';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
function App() {
  return (
    <BrowserRouter>
      <Router />
      <Form /> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;

