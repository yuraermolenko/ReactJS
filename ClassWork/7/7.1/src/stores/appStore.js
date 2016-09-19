import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'


class AppStore extends EventEmitter {
    constructor() {
        super() 
       
        this.style = true
    } 

    getInitialStyle() {
        return this.style
    }

    changeStyle() {
       return this.style=!this.style
    } 

   
    handleActions(action) {
		
        switch (action.type) {
            case "STYLE": { 
                this.emit('styleChange')
                console.log(this.style); 
                break; 
            }
        }
    } 
} 

const appStore = new AppStore; 
dispatcher.register(appStore.handleActions.bind(appStore)); 

module.exports = appStore; 