import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {
	let state = props.store.getState().dialogsPage;
	let dialogsElement = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);
	let MessagesElement = state.messagesData.map(message => <Message message = {message.message} isMyMessage = {message.isMyMessage}/>);
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () =>{
		props.store.dispatch(sendMessageCreator());
	}
	let onNewMessageChange = (e) =>{
let body = e.target.value;
props.store.dispatch(updateNewMessageBodyCreator(body));
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