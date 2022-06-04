import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import HeaderContainer from "./components/Header/HeaderContainer";




const App = () => {

  return (

    <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar/>
        <Content/>
        <Footer />
    </div>



  );
}


export default App;
