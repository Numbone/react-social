import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "helo how are you", likeCount: "12" },
                { id: 2, message: "gather more then having", likeCount: "37" },
                { id: 3, message: "the incrideble social site ", likeCount: "53" },
                { id: 4, message: "mother from another brother", likeCount: "64" },
                { id: 5, message: "lalalalend is cool", likeCount: "97" },
                { id: 6, message: "8705826156", likeCount: "64" }
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'Where are you?' },
                { id: 3, message: 'Could you be better?' },
                { id: 4, message: 'There is something wrong' },
                { id: 5, message: 'My holiday is tremendous' },
                { id: 6, message: 'Github.com' }
            ],
            dialog: [
                { id: 1, name: 'Nurlybek' },
                { id: 2, name: 'Aigerim' },
                { id: 3, name: 'Tima' },
                { id: 4, name: 'Botagoz' },
                { id: 5, name: 'Aslan' },
                { id: 6, name: 'Dias' },
                { id: 7, name: 'Shyngys' },
                { id: 8, name: 'Arailym' }
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {

    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogReducer(this._state.dialogsPage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state) 
       
    }
}






export default store