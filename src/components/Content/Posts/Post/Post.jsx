import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
	return (
		<div className={style.item}>
			<img src="https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg" alt=""></img>
			{ props.message }
			<div className={style.actions}><span>like </span><span>{ props.likeCount }</span></div>
		</div>


	);
}


export default Post;