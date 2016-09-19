import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'



class AppStore extends EventEmitter {
    constructor() {
        super() 
      
        this.result=0;
    } 
   
    getResult() {
      
        return this.result
    }       
    add(a,b){
        this.result=a+b;
    }
    rem(a,b){
        this.result=a-b;
    }
    mul(a,b){
        this.result=a*b;
    }
    div(a,b){
        this.result=a/b;
    }
   
    handleActions(action) {
		
        switch (action.type) {
            case "ADD":{
                this.add(action.a,action.b);
                this.emit('resultChange')
                console.log('Added');
                break;
            }
            case "REM":{
                this.rem(action.a,action.b);
                this.emit('resultChange')
                console.log('Removed');
                break;
            }
            case "MUL":{
                this.mul(action.a,action.b);
                this.emit('resultChange')
                console.log('Multiplyed');
                break;
            }
            case "DIV":{
                this.div(action.a,action.b);
                this.emit('resultChange')
                console.log('Divided');
                break;
            }
            }
        }
    } 


const appStore = new AppStore; 

dispatcher.register(appStore.handleActions.bind(appStore)); 

module.exports = appStore; 