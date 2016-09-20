var React = require('react');  

var bindActionCreators = require('redux').bindActionCreators; 
var connect = require('react-redux').connect; 
var actions = require('../actions/actions');
var List = require('../components/list.jsx');
var asyncActions = require('../actions/async');

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
    return (
            <div className="panell well">
                <button className="btn-md btn btn-warning"
                onClick={this.props.showList}>Show List!</button>
                <List users={this.props.users} showList={this.props.show}></List>
            </div>
        )
    }
} 


function mapStateToProps(state) {
    
    return {
        show: state.flag,
        users:state.users
    }
} 


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showList: actions.showList
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App) 