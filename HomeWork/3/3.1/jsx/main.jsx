var React = require('react');
var ReactDOM = require('react-dom');
var Counter = React.createClass({
    getInitialState: function () {
        return { counter: 0 }
    },
    plusCounter: function () {
        this.setState({ counter: this.state.counter + 1 })
    },
    minusCounter: function () {
        this.setState({ counter: this.state.counter - 1 })
    },
    render: function () {
        return (<div>
    <button onClick={this.plusCounter }>+</button>
     <button onClick={this.minusCounter }>-</button>
    <h1>{this.state.counter}</h1></div>)
    }
});
var container = document.getElementById('example');
ReactDOM.render(<Counter></Counter>, container);