import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
	let state = props.dialogsPage;
	let dialogsElement = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key = {dialog.id} id={dialog.id} avatar={dialog.avatar}/>);
	let MessagesElement = state.messagesData.map(message => <Message message = {message.message} key = {message.id} isMyMessage = {message.isMyMessage}/>);
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () =>{
		props.sendMessage();
	}
	let onNewMessageChange = (e) =>{
let body = e.target.value;
props.updateNewMessageBody(body);
	}

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItem}>
				{dialogsElement}
			</div>
			<div className={style.messages}>
				{MessagesElement}
			</div>
			<div className={style.input}>
				<textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'   rows="1"/>
				<button onClick={onSendMessageClick}>Send</button>
			</div>
		</div>
	);
}


export default Dialogs;