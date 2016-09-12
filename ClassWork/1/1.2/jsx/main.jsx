var React = require('react');
var ReactDOM = require('react-dom');
var Element = React.createClass({
    render: () => { return (<h1>Hello World!</h1>) }
});
var container = document.getElementById('example');
ReactDOM.render(<Element/>, container);