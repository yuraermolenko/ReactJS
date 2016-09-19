var React = require('react'); 

var appStore = require('../Stores/appStore'); 
var appActions = require('../Actions/appActions'); 


class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            style: appStore.getInitialStyle()
        }
        this.clickHandler = this.clickHandler.bind(this) 
    } 

    componentWillMount() { 
       
        appStore.on('styleChange', () => {
            this.setState({ style: appStore.changeStyle() })
        }
        )
    }

    clickHandler() {      
        appActions.changeStyle(); 
    }

    render() {
        return (
            <div className="panel well">
                <button className="btn-lg btn-warning btn" onClick={this.clickHandler}>Click me!</button>
                <div className={(this.state.style)?"red":"blue"}></div>
            </div>
    )}
}

module.exports = App; 