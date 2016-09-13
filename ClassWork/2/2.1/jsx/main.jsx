var React = require('react');
var ReactDOM = require('react-dom');
var Parent = React.createClass({
    render: function () {
        return (<div><h1>Hello!</h1><div>{this.props.children}</div></div>
       )
    }
});
var Child = React.createClass({
    render: function () {
        return (<h3>Some Text</h3>)
    }
});
var container = document.getElementById('example');
ReactDOM.render(<Parent><Child></Child></Parent>, container);