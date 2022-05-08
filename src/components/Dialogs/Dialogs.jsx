import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsElement = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);
	let MessagesElement = props.state.messagesData.map(message => <Message message = {message.message} isMyMessage = {message.isMyMessage}/>);
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