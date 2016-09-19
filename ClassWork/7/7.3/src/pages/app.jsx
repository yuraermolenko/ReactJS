var React = require('react'); 

var appStore = require('../Stores/appStore'); 
var appActions = require('../Actions/appActions'); 



class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            result: appStore.getResult(),
            
        }
        this.add = this.add.bind(this)
        this.rem = this.rem.bind(this)
        this.mul = this.mul.bind(this)
        this.div = this.div.bind(this)
    } 
   
    componentWillMount() {       

        appStore.on('resultChange', () => {

            this.setState({ result: appStore.getResult() })
            
        })
    }
    
    add() {
        let a = parseInt(document.getElementById('a').value);
        let b = parseInt(document.getElementById('b').value);
        appActions.add(a,b)
    }
    
    rem() {
        let a = parseInt(document.getElementById('a').value);
        let b = parseInt(document.getElementById('b').value);
        appActions.rem(a,b)
    }
    mul() {
        let a = parseInt(document.getElementById('a').value);
        let b = parseInt(document.getElementById('b').value);
        appActions.mul(a,b)
    }
    div() {
        let a = parseInt(document.getElementById('a').value);
        let b = parseInt(document.getElementById('b').value);
        appActions.div(a,b)
    }

    render() {
        return (
            <div className="panel well">
                <div className="form-group">
                <input id="a" type="text" className="input-lg form-control" />
                <input id="b" type="text" className="input-lg form-control" />
                </div>
                <button className="btn-lg btn-warning btn" onClick={this.add}>+</button>
                  <button className="btn-lg btn-warning btn" onClick={this.rem}>-</button>
                  <button className="btn-lg btn-warning btn" onClick={this.mul}>*</button>
                   <button className="btn-lg btn-warning btn" onClick={this.div}>/</button>
                <h1>Result:{this.state.result}</h1>
               
                </div>
               )}
}

module.exports = App; 