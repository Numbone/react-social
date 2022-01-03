import React from 'react';
import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://avatars.mds.yandex.net/i?id=3a15576d5a05f057245879aaec21ae84-5455692-images-thumbs&n=13&exp=1" alt="logotype" />
        </header>
    );
};

export default Header;