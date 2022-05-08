import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";



const App = (props) => {

  return (
<BrowserRouter>
    <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sideBar}/>
        <Content
            state={props.state}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
        />
        <Footer />
    </div>
</BrowserRouter>



  );
}


export default App;
