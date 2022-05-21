import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={style.image}>
				<img src="https://geniusmarketing.me/wp-content/uploads/2016/05/twitter.jpg" alt=""></img>
			</div>
			<div className={style.menu}>
				<div className={style.loginBlock}>
					{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

				</div>
			</div>
		</header>
	);
}


export default Header;