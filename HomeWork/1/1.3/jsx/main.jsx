var React = require('react');
var ReactDOM = require('react-dom');
var MyElement = React.createClass({
    
    render: function () {
        return (<p style={{ "color": this.props.color, "fontSize":this.props.fontSize}}>Hello, world!</p>)
    }
});
var container = document.getElementById('example');
ReactDOM.render(<MyElement color="red" fontSize="20px" />, container);