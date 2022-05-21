import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.image}>
                <img src="http://tutfon.ru/wallpapers/image.raw?view=image&type=orig&id=9915" alt='image'></img>
            </div>
            <div className={style.data}>
                <div className={style.avatar}>
                    <img src={props.profile.photos.large}/>
                    {/*<img src="https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg" alt=""/>*/}
                </div>
                <div className={style.info}>
                    <div className={style.name}>
                        {props.profile.fullName}
                    </div>
                    <div className={style.city}>
                        {props.profile.aboutMe}
                    </div>
                    <div>
                        {props.profile.lookingForAJob ? 'Ищет работу: ' : 'Не ищет работу: '}
                        {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : '-'}
                    </div>
                    <div className={style.contacts}>
                        <div>Контакты:</div>
                        <a href= {props.profile.contacts.facebook} >{props.profile.contacts.facebook}</a>
                        <a href= {props.profile.contacts.website} >{props.profile.contacts.website}</a>
                        <a href= {props.profile.contacts.vk} >{props.profile.contacts.vk}</a>
                        <a href= {props.profile.contacts.twitter} >{props.profile.contacts.twitter}</a>
                        <a href= {props.profile.contacts.instagram} >{props.profile.contacts.instagram}</a>
                        <a href= {props.profile.contacts.youtube} >{props.profile.contacts.youtube}</a>
                        <a href= {props.profile.contacts.github} >{props.profile.contacts.github}</a>
                        <a href= {props.profile.contacts.mainLink} >{props.profile.contacts.mainLink}</a>
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