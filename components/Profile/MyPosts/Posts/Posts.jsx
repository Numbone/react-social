import React from 'react';
import s from './Posts.module.css'
const Posts = (props) => {
    return (

        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/i?id=67d69aaa552f31122fb4a745041a31a1-4120171-images-thumbs&n=13&exp=1" alt="" />
            {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>


    );
};

export default Posts;