import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = (props) => {
    return <div className={style.wrapper}>
        < Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                    totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
        <div className={style.main}>

            {props.users.map(u => <User user={u}
                                        followingInProgress={props.followingInProgress}
                                        follow={props.follow}
                                        unfollow={props.unfollow}
                                        key={u.id}
            />)}

        </div>

    </div>
}
export default Users;