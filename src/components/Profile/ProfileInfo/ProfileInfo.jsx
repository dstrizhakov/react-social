import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user.png";
import ProfileStatus from "./ProfileStatusWithHooks"
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then (
            ()=> {
                setEditMode(false);
            }
        );

    }

    return (
        <div>

            <div className={style.data}>
                <div className={style.statusArea}>
                    <div className={style.avatar}>
                        <img src={profile.photos.large || userPhoto} alt="user photo"/>
                    </div>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} isOwner={isOwner} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}


            </div>
        </div>


    );
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={style.info}>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div className={style.name}>
            {profile.fullName}
        </div>

        <div className={style.city}>
            {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job</b>:{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>

        <div className={style.contacts}>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;