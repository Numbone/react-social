const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState = {

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

}
const dialogReducer = (state = initialState, action) => {

    
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
           return{
                ...state,
                newMessageBody :action.body
            }
            
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return{
                ...state,
                newMessageBody : "",
                messages:[...state.messages,{ id: 6, message: body }]
            }
            
           
        default:
            return state;

    }
    
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}



export default dialogReducer;