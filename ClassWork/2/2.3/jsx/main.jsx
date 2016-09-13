var React = require('react');
var ReactDOM = require('react-dom');
var Element = React.createClass({
    getInitialState:function(){
        return{
            toggleStyle:true
        }
    },
    getDefaultProps: function () {
        return {         
            style1: {
                "backgroundColor": "green",
                "width": "100px",
                "height": "100px",
                "borderRadius":"50%"
            },
            style2: {
                "backgroundColor": "blue",
                "width": "150px",
                "height": "100px",
            }
        }
    },
    changeStyle:function(){
        this.setState({ toggleStyle: !this.state.toggleStyle })
    },
    render: function () {
        return (<div>
   
   <div style={this.state.toggleStyle? this.props.style2 : this.props.style1}></div>
     <input type="checkbox" defaultChecked={this.state.toggleStyle} onChange={this.changeStyle } />
           </div>)
}
});
var container = document.getElementById("example");
ReactDOM.render(<Element></Element>, container);