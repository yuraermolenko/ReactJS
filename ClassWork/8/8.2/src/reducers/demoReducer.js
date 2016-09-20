


const demoReducer = (state=false, action) => {
    switch( action.type) {
        case 'SHOW_LIST': {
            return   state = true
            break;  
        }
        default: {
            return state
        }
    }
}

module.exports = demoReducer