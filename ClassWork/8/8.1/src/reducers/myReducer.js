const myReducer = (state='', action) => {
    switch( action.type) {
        case 'CHANGE_TEXT': {
            return action.payload
            break;
        }
        default: {
            return state
        }
    }
}

module.exports = myReducer