import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";



const PostsContainer = (props) => {

	return (
		<StoreContext.Consumer>
			{ (store) => {
				let state = store.getState();
				let addPost = () => {
					store.dispatch(addPostActionCreator());
				}
				let onPostChange = (text) => {
					let action = (updateNewPostTextActionCreator(text));
					store.dispatch(action);
				}
			return	<Posts updateNewPostText={onPostChange}
					   addPost={addPost}
					   posts={store.getState().profilePage.postsData}
					   newPostText={store.getState().profilePage.newPostText}/>}
			}
		</StoreContext.Consumer>
	)
}


export default PostsContainer;