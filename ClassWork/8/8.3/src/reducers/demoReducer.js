


const demoReducer = (state=[], action) => {
    switch( action.type) {
        case 'SHOW_LIST': {
            return   {...state, flag:true}
            break;  
        }
        case 'FETCH_USERS_START': {
            return {...state, fetching: true, users: []}
            break;
    }
        case 'FETCH_USERS_ERROR': {
            return {...state, fetching: false, error: action.payloads, users: []}
            break;
            }
        case 'RECEIVE_USERS': {
            console.log(action.payload)
            return {
                ...state, 
                fetching: false, 
                fetched: true, 
                users: action.payload
            }
            break;
        }
        default: {
            return state; 
        }

}}

module.exports = demoReducer