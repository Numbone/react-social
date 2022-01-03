import React from 'react';
import s from './NavBar.module.css'
const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>My profile</div>
            <div className={s.item}>Friends</div>
            <div className={s.item}>Messages</div>
            <div className={s.item}>Photos</div>
            <div className={s.item}>Communities</div>
            <div className={s.item}>News</div>
        </nav>
    );
};

export default NavBar;