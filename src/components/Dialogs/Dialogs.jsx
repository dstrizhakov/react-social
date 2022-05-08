import React from 'react';
import style from './Content.module.css';
import Posts from './Posts/Posts';

const Content = () => {
	return (
		<div className={style.content}>
			<div className={style.image}>
				<img src="http://tutfon.ru/wallpapers/image.raw?view=image&type=orig&id=9915" alt='image'></img>
			</div>
			<div className={style.data}>
				<div className={style.avatar}>
					<img src="https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg" alt="" />
				</div>
				<div className={style.info}>
					<div className={style.name}>
						Arina
					</div>
					<div className={style.city}>
						Taganrog
					</div>
				</div>
			</div>
			<Posts />
		</div>

	);
}


export default Content;