var React = require('react');
var ReactDOM = require('react-dom');
var Element = React.createClass({
    render: function () { return (<h1>{this.props.prop1}+{this.props.prop1}</h1>) }
});
var container = document.getElementById('example');
ReactDOM.render(<Element prop1="5" prop2="4"/>, container);