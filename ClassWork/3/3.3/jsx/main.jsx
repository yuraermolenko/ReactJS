var React = require('react');
var ReactDOM = require('react-dom');
var StopWatch = React.createClass({ 

    getInitialState: function() {
        return {
            counter: 1, 
        } 
    }, 

    count: function() {
        this.setState({counter: this.state.counter + 1}); 
    },

    render: function() {
                    
        if (!this.timer) {
            this.timer = setInterval(this.count, 1000); 
        }

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