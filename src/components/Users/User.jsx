import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {

/*    const squareDigits = (num) => {
        let numStr = num.toString();
        let strOut = '';
        for (let i = 0; i < numStr.length; i++) {
            let iteration = (numStr[i] * numStr[i]).toString();
            strOut = strOut + iteration;
        }
        return parseInt(strOut, 10);
    }
    console.log (squareDigits(9119));*/


    return (
        <div className={style.Container} key={user.id}>
            <div className={style.leftCnt}>
                <NavLink to={'/profile/' + user.id}>
                    <div className={style.PhotoCnt}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="ой, картинки нет"/>
                    </div>
                </NavLink>
                <div className={style.buttons}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} className={style.unfollow}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} className={style.follow}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>}
                </div>
            </div>
            <div className={style.rightCnt}>
                <div>
                    <div className={style.name}>{user.name}</div>
                    <div className={style.status}>{user.status}</div>
                </div>
            </div>
        </div>)
}
export default User;