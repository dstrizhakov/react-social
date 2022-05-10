import React from 'react';
import style from './Content.module.css';
import Posts from './Posts/Posts';
import Profile from "./Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";



const Content = (props) => {
	return (
	<div className={style.content}>
<Routes>
	<Route path='/profile' element={<Profile store={props.store} />} />
	<Route path='/dialog/*' element={<DialogsContainer store={props.store} />}/>
	<Route path='/news' element={<News/>}/>
	<Route path='/music' element={<Music/>}/>
	<Route path='/settings' element={<Settings/>}/>
</Routes>


	</div>






	);
}


export default Content;