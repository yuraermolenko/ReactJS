var React = require('react');

var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions');

class App extends React.Component {
     constructor(props) {
        super(props)
        this.inputHandler = this.inputHandler.bind(this)
    }
    inputHandler(e) {
        this.props.pushText(e.target.value)
    }

    render() {

    return (
            <div className="panell well">
                <input id="text" type="text" onInput={this.inputHandler} />

                <h1>{this.props.text}</h1>
            </div>
        )
    }

}


function mapStateToProps(state) {
   
    return {
        text: state
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        pushText: actions.changeText
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App) 