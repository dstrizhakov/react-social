import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import * as axios from "axios";


class Users extends React.Component {


    componentDidMount() {
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
           .then(response => {
               this.props.setUsers(response.data.items);
               this.props.setTotalUsersCount(response.data.totalCount);
           });
   }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });

    }


    render() {
        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );

        let pages = [];
        for(let i=1; i<=pagesCount;i++){
            pages.push(i);
        }



        return <div className={style.main}>
            <div className={style.pages}>
                {pages.map( p => {
                   return <span className={this.props.currentPage === p && style.selectedPage}
                                onClick={(e) =>{ this.onPageChanged(p); }}>{p}</span>
                })}

            </div>
            { this.props.users.map(u => <div className={style.Container} key={u.id}>
                <div className={style.leftCnt}>
                    <div className={style.PhotoCnt}> <img src={ u.photos.small !=null ? u.photos.small: userPhoto} alt="photo"/> </div>
                    <div className={style.buttons}>
                        {u.followed
                            ? <button className={style.follow} onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button className={style.unfollow} onClick={() => {this.props.follow(u.id)}}>Follow</button>}
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
    }
}

export default Users;