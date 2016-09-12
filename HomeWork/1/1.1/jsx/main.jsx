//var React = require('react');
//var ReactDOM = require('react-dom');

//var users = [{ name: "Anne Montgomery", gender: "Female" },
//                    { name: "Annie George", gender: "Female" },
//                    { name: "Gary Butler", gender: "Male" },
//                    { name: "Lisa Mendoza", gender: "Female" },
//                    { name: "Marilyn Henry", gender: "Female" },
//                    { name: "Johnny Tucker", gender: "Male" },
//                    { name: "Chris Jacobs", gender: "Male" },
//                    { name: "Benjamin James", gender: "Male" }];
//var Table = React.createClass({
    
//    render: function(){
//        return (
//    <table>
//        {this.props.listUsers.map(function (result,index) {
//            return
//            <Row key={index} itemName={result.name} itemGender={result.gender}></Row>
//        })}
//    </table>
//        )}
//});
//var Row = React.createClass({
//    render: function () {
//        return (
//            <tr>
//                <td>{this.props.itemName}</td>
//                <td>{this.props.itemGender}</td>
//            </tr>
//            )
//    }
//})
//var container = document.getElementById('example'); 
//ReactDOM.render(<Table listUsers={users}><Row/></Table>, container); 



var React = require('react'); 
var ReactDOM = require('react-dom'); 

// В данном примере рассматривается использование props в качестве средства взаимодейтсвия дочерних и родительских компонентов. 

var ResultList = React.createClass({
            
    getDefaultProps: function() {
        return {
            results: [{val: 'test value 1', id: 1}, {val: 'test value 2', id: 2}, 
                      {val: 'test value 3', id: 3}, {val: 'test value 4', id: 4}, 
                      {val: 'test value 5', id: 5}] 
        }
    }, 

    render: function() { 
        // создание дочерних React компонентов на основе значения props  
        return (
            <ul>
                 {this.props.results.map(function(result) {
                     return <ResultItem key={result.id} result={result.val}>1</ResultItem> 
                 })}
           </ul>
       )}
});

var ResultItem = React.createClass({
    render: function() {
        return (
        <li>{this.props.result};</li>
     )}
});

var container = document.getElementById('example'); 
ReactDOM.render(<ResultList><ResultItem/></ResultList>, container); 