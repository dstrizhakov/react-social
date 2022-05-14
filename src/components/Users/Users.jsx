import React from "react";
import style from "./Users.module.css";
import avatar01 from "../../redux/Avatars/1.jpg";
import avatar02 from "../../redux/Avatars/2.jpg";
import avatar03 from "../../redux/Avatars/3.jpg";
import avatar04 from "../../redux/Avatars/4.jpg";
import avatar05 from "../../redux/Avatars/5.jpg";
import avatar06 from "../../redux/Avatars/6.jpg";


let Users = (props) => {
    if (props.users.length === 0){
        props.setUsers([
            {id: 1, followed: false, fullName: "Dimych", photoUrl: avatar01, status: 'I am a boss', location: {cityname: 'Minsk', country: 'Belarus'}},
            {id: 2, followed: true, fullName: "Aleksander", photoUrl: avatar02,status: 'I am a consumer', location: {cityname: 'Moscow', country: 'Russia'}},
            {id: 3, followed: true, fullName: "Arina", photoUrl: avatar03,status: 'I am a director', location: {cityname: 'Tbilissi', country: 'Georgia'}},
            {id: 4, followed: true, fullName: "Vasya", photoUrl: avatar04,status: 'I am a worker', location: {cityname: 'AnKara', country: 'Turkey'}},
            {id: 5, followed: false, fullName: "Valera", photoUrl: avatar05,status: 'I am a ingineer', location: {cityname: 'Kiev', country: 'Ukraine'}},
            {id: 6, followed: false, fullName: "Kirill", photoUrl: avatar06,status: 'I am a desugner', location: {cityname: 'New York', country: 'USA'}},
            ]
        )
    }

    return <div className={style.main}>
           {
               props.users.map(u => <div className={style.Container} key={u.id}>
                   <div className={style.leftCnt}>
                       <div className={style.PhotoCnt}><img src={u.photoUrl} alt="photo"/></div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                               : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                       </div>
                   </div>
                   <div className={style.rightCnt}>
                       <div>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </div>
                       <div>
                           <div>{u.location.country}</div>
                           <div>{u.location.cityname}</div>
                       </div>
                   </div>
               </div>)
           }
       </div>
           }

export default Users;