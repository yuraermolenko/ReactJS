import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'



class AppStore extends EventEmitter {
    constructor() {
        super() 
       
       this.counter=0
    } 

    getCounter() {
        return this.counter
    }       
    count(){
        this.counter++
    }
    
    clearCounter(){
        this.counter=0;
    }
    handleActions(action) {
		
        switch (action.type) {
            case "CHANGE_COUNT":{
                this.count();
                this.emit('countChange')
                console.log(this.counter);
                break;
            }
            case "CLEAR_COUNT":{
                this.clearCounter();
                this.emit('countChange')
                console.log('cleared')
                break;
            }          
            }
        }
    } 


const appStore = new AppStore; 

dispatcher.register(appStore.handleActions.bind(appStore)); 

module.exports = appStore; 