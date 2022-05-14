import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";




const App = (props) => {

  return (

    <div className='app-wrapper'>
        <Header />
        <Navbar/>
        <Content/>
        <Footer />
    </div>



  );
}


export default App;
