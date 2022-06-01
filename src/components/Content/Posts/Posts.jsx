import React from 'react';
import Post from './Post/Post';
import style from './Post.module.css';



const Posts = (props) => {
	let postsElement = props.posts.map( p => <Post message={p.message} key={p.id} likeCount={p.likeCount}/> );
	let newPostElement = React.createRef();
	let onAddPost = () => {
		props.addPost();
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}
	return (
		<div className={style.posts}>
			<h3>My posts:</h3>
			<div className={style.input}>
				<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}  rows="4"/>
				<button onClick={onAddPost}>Add post</button>
			</div>
			<div className={style.postwall}>
				{ postsElement }
			</div>

		</div>

	);
}


export default Posts;