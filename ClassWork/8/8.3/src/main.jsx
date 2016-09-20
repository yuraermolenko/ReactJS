var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;

var redux = require('redux');
var createStore = redux.createStore;
var combineReducers = redux.combineReducers;
var applyMiddleware = redux.applyMiddleware;


var thunk = require('redux-thunk').default;

var demoReducer = require('./reducers/demoReducer');
var App = require('./components/app.jsx');

var fetchUsers = require('./actions/async').fetchUsers;

const middleware = applyMiddleware(thunk);
const store = createStore(demoReducer, middleware)


store.dispatch(fetchUsers())
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>,
  document.getElementById('root')
)