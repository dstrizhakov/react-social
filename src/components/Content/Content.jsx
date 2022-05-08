import React from 'react';
import style from './Content.module.css';
import Posts from './Posts/Posts';
import Profile from "./Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";



const Content = (props) => {
	return (
	<div className={style.content}>
<Routes>
	<Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
	<Route path='/dialog/*' element={<Dialogs state={props.state.dialogsPage} />}/>
	<Route path='/news' element={<News/>}/>
	<Route path='/music' element={<Music/>}/>
	<Route path='/settings' element={<Settings/>}/>
</Routes>


	</div>






	);
}


export default Content;