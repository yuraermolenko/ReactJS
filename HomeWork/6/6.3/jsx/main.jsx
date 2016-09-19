import React from 'react';
import ReactDOM from 'react-dom';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); 
import {Router, Route, Link, IndexRoute, hashHistory, Redirect} from 'react-router';
import List from './views/list.jsx';
import Table from './views/table.jsx';
import User from './views/user.jsx';
class Component extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const animProps = {
            transitionName:"example", 
            transitionEnterTimeout: 500, 
            transitionLeaveTimeout: 300, 
            component: 'div', 
            transitionAppear: true,
            transitionAppearTimeout: 300
        } 
        return (
            <div>
                <div>
                    <ul>
                        <li><Link to="/list"><button>List</button></Link></li>
                        <li><Link to="/table"><button>Table</button></Link></li>
                    </ul>
                </div>
              <div className="panel"> 
                     <ReactCSSTransitionGroup {...animProps}>
                            {React.cloneElement(this.props.children, { key: Math.random() })}
                     </ReactCSSTransitionGroup>
                </div>
            </div>
        )}
}
class Home extends React.Component {
    render() {
        return (
            <h1>This is the homepage</h1>        
    )}
}
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Component}>
             <IndexRoute component={Home}/>            
            <Route path="list" component={List}  />
            <Route path="table" component={Table}  />
             <Route path="list/:id" component={User} />
             <Route path="table/:id" component={User} />
            <Redirect from="*" to="/" />
        </Route>
    </Router>,
document.getElementById('example')
);