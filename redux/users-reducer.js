const FOLLOW = 'follow'
const UNFOLLOW = 'unfollow'
const SET_USERS = 'set_users'


let initialState = {

    users: [
        
    ],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usedId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usedId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        default:
            return state;
    }





}

export const followAC = (usedId) => {
    return {
        type: FOLLOW, usedId
    }
}
export const unfollowAC = (usedId) => {
    return {
        type: UNFOLLOW, usedId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}
export default usersReducer;