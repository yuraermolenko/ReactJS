var React = require('react');

var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions');
var InputComp=require('../components/inputComp.jsx')
class App extends React.Component {
    constructor() {
        super();
    }
    render() {
    return (
            <div className="panell well">
            <InputComp text={this.props.text} pushText={this.props.changeText} ></InputComp>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log(state)
    return {
        text: state
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeText: actions.changeText
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App) 