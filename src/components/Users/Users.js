import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";

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
                <div className={style.PhotoCnt}><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                     alt="photo"/></div>
                <div className={style.buttons}>
                    {u.followed
                        ? <button className={style.follow} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button className={style.unfollow} onClick={() => {
                            props.follow(u.id)
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