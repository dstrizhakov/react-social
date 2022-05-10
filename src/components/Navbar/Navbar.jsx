import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
	return (
		<div className={style.nav}>
			<nav >
				<div className={style.item}>
					<NavLink to='/profile' className={({isActive}) => isActive ? `${style.active}` : ''}>Profile</NavLink>
				</div>
				<div className={style.item}>
					<NavLink to='/dialog' className={({isActive}) => isActive ? `${style.active}` : ''}>Messages</NavLink>
				</div>
				<div className={style.item}>
					<NavLink to='/news' className={({isActive}) => isActive ? `${style.active}` : ''}>News</NavLink>
				</div>
				<div className={style.item}>
					<NavLink to='/music' className={({isActive}) => isActive ? `${style.active}` : ''}>Music</NavLink>
				</div>
				<div className={style.item}>
					<NavLink to='/settings' className={({isActive}) => isActive ? `${style.active}` : ''}>Settings</NavLink>
				</div>
			</nav>
			{/*{<Friends state = {props.state.friends}/>}*/}
		</div>
	);
}


export default Navbar;