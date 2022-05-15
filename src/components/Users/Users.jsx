import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import * as axios from "axios";


class Users extends React.Component {
    getUsers =() => {   if (this.props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }}
    render() {
        return <div className={style.main}>

            { this.props.users.map(u => <div className={style.Container} key={u.id}>
                <div className={style.leftCnt}>
                    <div className={style.PhotoCnt}> <img src={ u.photos.small !=null ? u.photos.small: userPhoto} alt="photo"/> </div>
                    <div className={style.buttons}>
                        {u.followed
                            ? <button className={style.follow} onClick={() => {this.props.unfollow(u.id)}}>Unfollowed</button>
                            : <button className={style.unfollow} onClick={() => {this.props.follow(u.id)}}>Followed</button>}
                    </div>
                </div>
                <div className={style.rightCnt}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.cityname"}</div>
                    </div>
                </div>
            </div>)
            }
            <div className={style.loadMore}> <button onClick={this.getUsers}>Get more users</button> </div>

        </div>
    }
}
/*
let Users = (props) => {
    const getUsers =() => {   if (props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }}


    return <div className={style.main}>
        <button onClick={getUsers}>Get Users</button>
           { props.users.map(u => <div className={style.Container} key={u.id}>
                   <div className={style.leftCnt}>
                       <div className={style.PhotoCnt}> <img src={ u.photos.small !=null ? u.photos.small: userPhoto} alt="photo"/> </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                               : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                       </div>
                   </div>
                   <div className={style.rightCnt}>
                       <div>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </div>
                       <div>
                           <div>{"u.location.country"}</div>
                           <div>{"u.location.cityname"}</div>
                       </div>
                   </div>
               </div>)
           }
       </div>
           }*/

export default Users;