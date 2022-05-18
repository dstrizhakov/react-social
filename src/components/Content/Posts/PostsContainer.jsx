import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: (body) => {
            dispatch(addPostActionCreator());
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer;