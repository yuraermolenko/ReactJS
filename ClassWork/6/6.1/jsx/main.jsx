var React = require('react'); 
var ReactDOM = require('react-dom'); 

import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

import View1 from './views/view1.jsx';
import View2 from './views/view2.jsx';

class Component extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><Link to="/view1"><button>View 1</button></Link></li>
                        <li><Link to="/view2"><button>View 2</button></Link></li>
                    </ul>
                </div>
                <div>{this.props.children}</div>
            </div>
        )}
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Component}>
            <Route path="view1" component={View1} />
            <Route path="view2" component={View2} />
        </Route>
</Router>, document.getElementById('example'));