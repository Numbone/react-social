import React from 'react';
import MyPosts from './MyPosts/MyPosts';

import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=495dfeaf7eae28e984870e212f8d04bd-5260040-images-thumbs&n=13&exp=1" alt="" />
            </div>
            <div>ava+decipr</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;