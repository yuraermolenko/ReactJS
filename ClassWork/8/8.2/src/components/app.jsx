var React = require('react');  

var bindActionCreators = require('redux').bindActionCreators; 
var connect = require('react-redux').connect; 
var actions = require('../actions/actions');
var List = require('../components/list.jsx');
let users = [{ "id": 1, "first_name": "Carlos", "last_name": "Hughes", "email": "chughes0@stumbleupon.com", "gender": "Male" },
{ "id": 2, "first_name": "Ruby", "last_name": "Carpenter", "email": "rcarpenter1@marketwatch.com", "gender": "Female" },
{ "id": 3, "first_name": "Bruce", "last_name": "Smith", "email": "bsmith2@hp.com", "gender": "Male" },
{ "id": 4, "first_name": "David", "last_name": "Howell", "email": "dhowell3@webnode.com", "gender": "Male" },
{ "id": 5, "first_name": "Kathryn", "last_name": "Reynolds", "email": "kreynolds4@digg.com", "gender": "Female" },
{ "id": 6, "first_name": "Ralph", "last_name": "Dunn", "email": "rdunn5@oakley.com", "gender": "Male" },
{ "id": 7, "first_name": "John", "last_name": "Hughes", "email": "jhughes6@miitbeian.gov.cn", "gender": "Male" },
{ "id": 8, "first_name": "Mary", "last_name": "Tucker", "email": "mtucker7@cloudflare.com", "gender": "Female" },
{ "id": 9, "first_name": "Kenneth", "last_name": "Dunn", "email": "kdunn8@globo.com", "gender": "Male" },
{ "id": 10, "first_name": "Juan", "last_name": "Stanley", "email": "jstanley9@engadget.com", "gender": "Male" }];

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
    return (
            <div className="panell well">
                <button className="btn-md btn btn-warning"
                onClick={this.props.showList}>Show List!</button>
                <List users={users} showList={this.props.show}></List>
            </div>
        )
    }
} 


function mapStateToProps(state) {
    
    return {
        show: state,        
    }
} 


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showList: actions.showList
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App) 