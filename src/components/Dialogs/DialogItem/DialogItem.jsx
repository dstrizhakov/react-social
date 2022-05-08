import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
let path = '/dialog/' + props.id;
	return (
	<div className={style.dialog}>
		<div className={style.avatar}>
			<img src={props.avatar} alt="ava"/>
		</div>
		<NavLink to={path} className={({isActive}) => isActive ? `${style.active}` : ''}>{props.name}</NavLink>
	</div>
	)
}

export default DialogItem;