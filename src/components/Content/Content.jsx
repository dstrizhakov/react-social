import React from 'react';
import style from './Content.module.css';

import {Route, Routes} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";



const Content = (props) => {
	return (
	<div className={style.content}>
<Routes>
	<Route path='/profile/:id' element={<ProfileContainer />}/>
	<Route path='/dialog/*' element={<DialogsContainer store={props.store} />}/>
	<Route path='/news' element={<News/>}/>
	<Route path='/users' element={<UsersContainer/>}/>
	<Route path='/music' element={<Music/>}/>
	<Route path='/settings' element={<Settings/>}/>
</Routes>
	</div>
	);
}


export default Content;