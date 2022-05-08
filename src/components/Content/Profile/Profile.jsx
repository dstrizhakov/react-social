import React from 'react';
import style from './Profile.module.css';
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
        <ProfileInfo />
            <Posts posts={props.profilePage.postsData}
                   newPostText ={props.profilePage.newPostText}
                   addPost={props.addPost}
                   updateNewPostText={props.updateNewPostText}/>
        </div>

    );
}


export default Profile;