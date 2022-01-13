import React from 'react';
import Posts from './Posts/Posts';
import s from './MyPosts.module.css'



const MyPosts = (props) => {

     

    let postsElements = props.posts.map(p => <Posts message={p.message} like={p.likeCount} />)

    let newPostElement = React.createRef();

    let onaddPost = () => {
        props.addPost()



    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        ref={newPostElement} cols="20" rows="2   "
                        value={props.newPostText}>

                    </textarea>
                </div>
                <div>
                    <button onClick={onaddPost}>
                        Add post
                    </button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>


    );
};

export default MyPosts;