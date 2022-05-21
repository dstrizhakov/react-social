import React from 'react';
import style from './Header.module.css';
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.image}>
				<img src="https://geniusmarketing.me/wp-content/uploads/2016/05/twitter.jpg" alt=""></img>
			</div>
			<div className={style.menu}>
				<div className={style.loginBlock}>

					{ props.userPhotoUrl
						? <img className={style.userImage} src={props.userPhotoUrl} alt="Ой, картинки нет"/>
						: <img className={style.userImage} src={userPhoto} alt="Ой, картинки нет"/>
					}
					{ props.isAuth
						? props.login
						: <NavLink to={'/login'}>Login</NavLink>
					}

				</div>
			</div>
		</header>
	);
}


export default Header;