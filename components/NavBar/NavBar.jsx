import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './NavBar.module.css'
const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
               <NavLink to= "/profile">My profile</NavLink> 
                </div>
            <div className={s.item}>
               <NavLink to= "/dialogs" >Messages</NavLink> 
                </div>
            <div className={s.item}>
                <NavLink to="/users">Users</NavLink> 
                </div>
            <div className={s.item}>
                Photos
                </div>
            <div className={s.item}>
                Communities
                </div>
            <div className={s.item}>
                News
                </div>
        </nav>
    );
};

export default NavBar;