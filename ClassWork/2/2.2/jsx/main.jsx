var React = require('react');
var ReactDOM = require('react-dom');
var Element = React.createClass({
    getInitialState:function(){
        return{
            mode:true
        }
    },
    getDefaultProps: function () {
        return {         
            number1: 10,
            number2: 5
        }
    },
    change:function(){
        this.setState({mode:!this.state.mode})
    },
    render: function () {
        return (<div>
    <input type="checkbox" defaultChecked={this.state.mode} onChange={this.change} /><label>Mode: {this.state.mode?"Addition":"Concatenation"}</label>
    <p>{this.state.mode ? this.props.number1 + this.props.number2 : "" + this.props.number1 + this.props.number2}</p>
           </div>)
    }
});
var container = document.getElementById("example");
ReactDOM.render(<Element></Element>, container);