var React = require('react');
var ReactDOM = require('react-dom');
var Element = React.createClass({
    getInitialState:function(){
        return { classToggle: true }
    },
    changeClass:function(){
        this.setState({classToggle:!this.state.classToggle})
    },
    render: function () {
        return(
           <div>
               <button onClick={this.changeClass}>Change Class!</button>
               <div className={this.state.classToggle? "black" : "red" }></div>     
                 </div>
    )
    }
})
var container = document.getElementById('example');
ReactDOM.render(<Element></Element>, container);