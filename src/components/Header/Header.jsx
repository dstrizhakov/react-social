import React from 'react';
import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.image}>
				<img src="https://geniusmarketing.me/wp-content/uploads/2016/05/twitter.jpg" alt=""></img>
			</div>
			<div className={style.menu}>
				<div className={style.item}><a href="#">Help</a></div>
				<div className={style.item}><a href="#">Sing in</a></div>
				<div className={style.item}><a href="#">Login</a></div>
			</div>
		</header>
	);
}


export default Header;