import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";



const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}
                                                                     avatar={dialog.avatar}/>);
    let MessagesElement = state.messagesData.map(message => <Message message={message.message} key={message.id}
                                                                     isMyMessage={message.isMyMessage}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);

    }
    /*if (!props.isAuth) return <Navigate replace to="/login" />;*/
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {MessagesElement}
            </div>

            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
}


export default Dialogs;