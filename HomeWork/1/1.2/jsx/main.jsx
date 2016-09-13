var React = require('react');
var ReactDOM = require('react-dom');
var Form = React.createClass({
    render: () => { return (<form>
    <input type="text" placeholder="name" />
    <input type="text" placeholder="login" />
    <input type="submit" value="Send" /></form>) }
});
var container = document.getElementById('example');
ReactDOM.render(<Form/>, container);