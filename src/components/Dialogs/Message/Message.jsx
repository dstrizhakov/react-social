import React from 'react';
import style from './../Dialogs.module.css';



const Message = (props) => {
	/*{props.isMyMessage ? console.log ("My message") :console.log ("Another message") }*/
	return(

		<div className={style.message}>
			{props.message}
		</div>
	)
}

export default Message;