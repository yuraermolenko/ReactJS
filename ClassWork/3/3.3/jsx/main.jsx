var React = require('react');
var ReactDOM = require('react-dom');
var StopWatch = React.createClass({ 

    getInitialState: function() {
        return {
            counter: 0, 
        } 
    }, 

    count: function() {
        this.setState({counter: this.state.counter + 1}); 
    },
    startWatch:function () {
     
            this.timer = setInterval(this.count, 1000);
        
    },
    stopWatch: function (){
        if (this.timer) clearInterval(this.timer);
    },
    resetWatch: function(){
        if (this.timer) clearInterval(this.timer);
        this.setState({counter:0})
    },
    render: function() {
      
        return (
            <div><h1>Секундомер : {this.state.counter}</h1>
    <button onClick={this.startWatch}>Start</button>
    <button onClick={this.stopWatch}>Stop</button>
    <button onClick={this.resetWatch}>Reset</button></div>
        )
}
})

var container = document.getElementById('example'); 

ReactDOM.render(<StopWatch/>, container); 