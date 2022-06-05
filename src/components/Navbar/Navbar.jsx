import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
	return (
		<div className={style.nav}>
			<nav >
				<div className={style.item}>
					<NavLink to='/profile/:userId' className={({isActive}) => isActive ? `${style.active}` : ''}>Profile</NavLink>
				</div>
				<div className={style.item}>
					<NavLink to='/dialogs' className={({isActive}) => isActive ? `${style.active}` : ''}>Messages</NavLink>
				</div>
				<div className={style.item}>
					<NavLink to='/users' className={({isActive}) => isActive ? `${style.active}` : ''}>Users</NavLink>
				</div>
				{/*<div className={style.item}>
					<NavLink to='/news' className={({isActive}) => isActive ? `${style.active}` : ''}>News</NavLink>
				</div>
				<div className={style.item}>
					<NavLink to='/music' className={({isActive}) => isActive ? `${style.active}` : ''}>Music</NavLink>
				</div>
				<div className={style.item}>
					<NavLink to='/settings' className={({isActive}) => isActive ? `${style.active}` : ''}>Settings</NavLink>
				</div>*/}

			</nav>
			{/*{<Friends state = {props.state.friends}/>}*/}
		</div>
	);
}


export default Navbar;