import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={style.main}>
       <div className={style.pages}>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}

        </div>
        {props.users.map(u => <div className={style.Container} key={u.id}>
            <div className={style.leftCnt}>
                <NavLink to={'/profile/' + u.id}>
                <div className={style.PhotoCnt}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="photo"/>
                </div>
                    </NavLink>
                <div className={style.buttons}>
                    {u.followed
                        ? <button className={style.unfollow} onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "8197d958-489f-42c0-87fe-c5b1b71c87f0"
                                    }

                                })
                                .then(response => {
                                    if(response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                });


                        }}>Unfollow</button>
                        : <button className={style.follow} onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "8197d958-489f-42c0-87fe-c5b1b71c87f0"
                                    }

                                })
                                .then(response => {
                                    if(response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                });

                        }}>Follow</button>}
                </div>
            </div>
            <div className={style.rightCnt}>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                   {/* <div>{"u.location.country"}</div>
                    <div>{"u.location.cityname"}</div>*/}
                </div>
            </div>
        </div>)
        }

    </div>
}
export default Users;