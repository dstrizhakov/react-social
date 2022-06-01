import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={style.wrapper}>
<div className={style.main}>
        {props.users.map(u => <div className={style.Container} key={u.id}>
            <div className={style.leftCnt}>
            <NavLink to={'/profile/' + u.id}>
            <div className={style.PhotoCnt}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ой, картинки нет"/>
            </div>
            </NavLink>
            <div className={style.buttons}>
            {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={style.unfollow}
                    onClick={() => {props.unfollow(u.id) }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} className={style.follow}
                    onClick={() => {props.follow(u.id) }}>Follow</button>}
    </div>
    </div>
    <div className={style.rightCnt}>
        <div>
        <div>{u.name}</div>
        <div>{u.status}</div>
        </div>
        </div>
        </div>)
}

        </div>
    <div className={style.pages}>
        {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
            })}

        </div>
        </div>
}
export default Users;