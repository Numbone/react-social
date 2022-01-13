import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
             <div>
                <img src="https://avatars.mds.yandex.net/i?id=495dfeaf7eae28e984870e212f8d04bd-5260040-images-thumbs&n=13&exp=1" alt=" tabasdasdsad" />
            </div>
            <div className={s.descriptionBlock}>ava+decipr</div>
        </div>
    );
};

export default ProfileInfo;