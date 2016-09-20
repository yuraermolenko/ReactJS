var React = require('react');  
var ReactDOM = require('react-dom');  


var Provider = require('react-redux').Provider;  
var createStore = require('redux').createStore;  

var myReducer = require('./reducers/myReducer'); 
var App = require('./components/app.jsx'); 

const store = createStore(myReducer);  


ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>, 
  document.getElementById('root')
)  
