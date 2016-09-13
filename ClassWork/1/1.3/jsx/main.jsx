var React = require('react');
var ReactDOM = require('react-dom');
var Element = React.createClass({
    render: function () {
        var result = parseInt(this.props.prop1) + parseInt(this.props.prop2);
        return (<h1>{result}</h1>)
    }
});
var container = document.getElementById('example');
ReactDOM.render(<Element prop1="5" prop2="4"/>, container);