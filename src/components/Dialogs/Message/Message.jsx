import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
let path = '/dialog/' + props.id;
	return (
	<div className={style.dialog + ' ' + style.active}>
		<NavLink to={path}>{props.name}</NavLink>
	</div>
	)
}
const Message = (props) => {
	return(
		<div className={style.message}>
			{props.message}
		</div>
	)
}
let  dialogsData = [
	{id: 1, name: "Dimych"},
	{id: 2, name: "Aleksander"},
	{id: 3, name: "Arina"},
	{id: 4, name: "Vasya"},
	{id: 5, name: "Valera"},
	{id: 6, name: "Kirill"},
]
let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

let  messagesData = [
	{id: 1, message: "Hi!"},
	{id: 2, message: "How are you?"},
	{id: 3, message: "Yo"},
]
let MessagesElement = messagesData.map(message => <Message message = {message.message}/>);

const Dialogs = () => {
	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItem}>
				{dialogsElement}
			</div>
			<div className={style.messages}>
				{MessagesElement}
			</div>
		</div>
	);
}


export default Dialogs;