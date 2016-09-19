import dispatcher from '../dispatcher' 


export function add(a,b){
    dispatcher.dispatch({ type: 'ADD',a,b})
}
export function rem(a,b) {
    dispatcher.dispatch({ type: 'REM',a,b})
}
export function mul(a,b) {
    dispatcher.dispatch({ type: 'MUL',a,b})
}
export function div(a,b) {
    dispatcher.dispatch({ type: 'DIV',a,b})
}