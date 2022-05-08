import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



const Posts = (props) => {
	let postsElement = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/> );
	let newPostElement = React.createRef();
	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = (updateNewPostTextActionCreator(text));
		props.dispatch(action);
	}
	return (
		<div className={style.posts}>
			<h3>My posts:</h3>
			<div className={style.input}>
				<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}  rows="4"/>
				<button onClick={addPost}>Add post</button>
			</div>
			<div className={style.postwall}>
				{ postsElement }
			</div>

		</div>

	);
}


export default Posts;