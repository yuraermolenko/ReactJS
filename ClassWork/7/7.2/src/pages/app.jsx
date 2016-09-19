var React = require('react'); 

var appStore = require('../Stores/appStore'); 
var appActions = require('../Actions/appActions'); 



class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            counter: appStore.getCounter()
        }
        this.startCounter = this.startCounter.bind(this)
        this.stopCounter = this.stopCounter.bind(this)
        this.clearCounter = this.clearCounter.bind(this)
    } 

    componentWillMount() {
        appActions.startCounter();

        appStore.on('countChange', () => {

            this.setState({ counter: appStore.getCounter() })
        })
    }
      
        
    
    startCounter(){
        appActions.startCounter()
    }
    stopCounter() {
        appActions.stopCounter()
    }
    clearCounter() {
        appActions.clearCounter()
    }

    render() {
        return (
            <div className="panel well">
                <button className="btn-lg btn-warning btn" onClick={this.startCounter}>Start</button>
                  <button className="btn-lg btn-warning btn" onClick={this.stopCounter}>Stop</button>
                  <button className="btn-lg btn-warning btn" onClick={this.clearCounter}>Clear</button>
                <p>Timer:{this.state.counter}</p>
                </div>
               )}
}

module.exports = App; 