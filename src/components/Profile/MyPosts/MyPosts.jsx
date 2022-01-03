import React from 'react';
import Posts from './Posts/Posts';
import s from './MyPosts.module.css'
const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea name="" id="" cols="20" rows="2   ">

                </textarea>
                <button>
                    Add post
                </button>
            </div>

            <div className={s.posts}>
               <Posts message='helo how are you' like="12"/>
               <Posts message='helo how are you1' like="122"/>
               <Posts message='helo how are you2' like="123"/>
               <Posts message='helo how are you3' like="124"/>
               <Posts message='helo how are you4' like="125"/>
            </div>
            
        </div>
        

    );
};

export default MyPosts;