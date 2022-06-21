import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user.png";
import ProfileStatus from "./ProfileStatusWithHooks"


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0]);
        }

    }
    return (
        <div>

            <div className={style.data}>
                <div className={style.statusArea}>

                    <div className={style.avatar}>
                        <img src={profile.photos.large || userPhoto} alt="user photo"/>
                    </div>
                    { isOwner && <input type = {"file"}  onChange={onMainPhotoSelected} />}
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>


                <div className={style.info}>
                    <div className={style.name}>
                        {profile.fullName}
                    </div>

                    <div className={style.city}>
                        {profile.aboutMe}
                    </div>
                    <div>
                        {profile.lookingForAJob ? 'Ищет работу: ' : 'Не ищет работу: '}
                        {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : '-'}
                    </div>

                    <div className={style.contacts}>
                        <div>Контакты:</div>
                        <a href={profile.contacts.facebook}>{profile.contacts.facebook}</a>
                        <a href={profile.contacts.website}>{profile.contacts.website}</a>
                        <a href={profile.contacts.vk}>{profile.contacts.vk}</a>
                        <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a>
                        <a href={profile.contacts.instagram}>{profile.contacts.instagram}</a>
                        <a href={profile.contacts.youtube}>{profile.contacts.youtube}</a>
                        <a href={profile.contacts.github}>{profile.contacts.github}</a>
                        <a href={profile.contacts.mainLink}>{profile.contacts.mainLink}</a>
                        {/*<span>{props.profile.contacts.facebook ? props.profile.contacts.facebook : null}</span>
                        <span>{props.profile.contacts.website ? props.profile.contacts.website : null}</span>
                        <span>{props.profile.contacts.vk ? props.profile.contacts.vk : null}</span>
                        <span>{props.profile.contacts.twitter ? props.profile.contacts.twitter : null}</span>
                        <span>{props.profile.contacts.instagram ? props.profile.contacts.instagram : null}</span>
                        <span>{props.profile.contacts.youtube ? props.profile.contacts.youtube : null}</span>
                        <span>{props.profile.contacts.github ? props.profile.contacts.github : null}</span>
                        <span>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : null}</span>*/}
                    </div>
                </div>

            </div>


        </div>


    );
}


export default ProfileInfo;