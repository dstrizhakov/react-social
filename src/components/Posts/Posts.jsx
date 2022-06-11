import React from 'react';
import Post from './Post/Post';
import style from './Post.module.css';
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";

const Posts = (props) => {
    let postsElement = [...props.posts].reverse().map(p => <Post message={p.message} key={p.id} likeCount={p.likeCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.posts}>
            <h3>My posts:</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={style.postwall}>
                {postsElement}
            </div>

        </div>

    );
}


export default Posts;