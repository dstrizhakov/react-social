import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

import {connect} from "react-redux";



/*
const PostsContainer1 = (props) => {

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
}*/


let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.postsData,
		newPostText:state.profilePage.newPostText
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text)=>{
			dispatch(updateNewPostTextActionCreator(text));
		},
		addPost: (body)=>{
			dispatch(addPostActionCreator());
		}
	}
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer;