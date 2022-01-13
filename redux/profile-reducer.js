const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {

    posts: [
        { id: 1, message: "helo how are you", likeCount: "12" },
        { id: 2, message: "gather more then having", likeCount: "37" },
        { id: 3, message: "the incrideble social site ", likeCount: "53" },
        { id: 4, message: "mother from another brother", likeCount: "64" },
        { id: 5, message: "lalalalend is cool", likeCount: "97" },
        { id: 6, message: "8705826156", likeCount: "64" }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 18
            }
            return{...state,
                newPostText :'',
                posts:[...state.posts,newPost]
            }
            
        }
        case UPDATE_NEW_POST_TEXT:{
            return {...state,
                newPostText : action.newText}
        }
        default:
            return state;
    }


    /*if (action.type === 'ADD-POST') {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 18
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText

    }*/


}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export default profileReducer;