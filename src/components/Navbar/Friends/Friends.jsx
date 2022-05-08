import DialogItem from "../../Dialogs/DialogItem/DialogItem";
import style from "./Friends.module.css";
import React from "react";

const Friends = (props) => {

    let dialogsElement = props.state.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>);
    return (
        <div className={style.conteiner}>
            <div className={style.title}>Friends</div>
            <div className={style.list}>
                {dialogsElement}
            </div>
        </div>


    );
}
export default Friends;