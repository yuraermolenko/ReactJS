import dispatcher from '../dispatcher' 

let timer

export function changeCount(){
    dispatcher.dispatch({ type: 'CHANGE_COUNT'})
}

export function stopCounter() {
    clearInterval(timer);
    timer=undefined;
}
export function clearCounter() {
    dispatcher.dispatch({ type: 'CLEAR_COUNT'})
}
export function startCounter() {
    if (timer===undefined){
        timer=setInterval(changeCount,1000)
    }
}