import dispatcher from '../dispatcher'; 


export function createItem(item) {
    dispatcher.dispatch({
        type: 'CREATE_ITEM', 
        item
    })
}


export function removeItem(id) {
    dispatcher.dispatch({
        type: 'REMOVE_ITEM', 
        id
    })
} 

 


export function editStart(id) {
    dispatcher.dispatch({
        type: 'EDIT_START', 
        id
    })
} 

export function editEnd(item) {
    dispatcher.dispatch({
        type: 'EDIT_END', 
        item
      })
}
export function search(str) {
    dispatcher.dispatch({
        type: 'SEARCH_ITEM', 
        str
    })
}
