var React = require('react'); 
var Link = require('react-router').Link;   


var TodoStore = require('../stores/toDoStore'); 


var List = require('./list.jsx'); 

 
var TodoActions = require('../actions/toDoActions'); 

class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            tasks: TodoStore.getAll(),             
        }        
    }
    search() {
        let string = document.getElementById('search').value;
        TodoStore.getAll(string);
    }
    render() {
        return(<div className="panel">
                    <div className="panel well">
                        <h2>Tasks</h2>
<div className="margin"><Link to="/edit"><button className="btn btn-sm btn-warning">Edit</button></Link></div>
                    </div>
    <input type="text" id="search" /><button onClick={this.search}>Search!</button>
             <List showDetails={false} items={this.state.tasks}/> 
        </div>  
    )}
} 

module.exports = App; 
