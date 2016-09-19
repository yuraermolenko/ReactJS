import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory, Redirect} from 'react-router';
import List from './views/list.jsx';
import Table from './views/table.jsx';
class Component extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><Link to="/list"><button>List</button></Link></li>
                        <li><Link to="/table"><button>Table</button></Link></li>
                    </ul>
                </div>
                <div>{this.props.children}</div>
            </div>
        )}
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Component}>            
            <Route path="list" component={List}  />
            <Route path="table" component={Table}  />
            <Redirect from="*" to="/" />
        </Route>
    </Router>,
document.getElementById('example')
);