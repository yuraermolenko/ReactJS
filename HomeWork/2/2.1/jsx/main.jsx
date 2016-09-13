var React = require('react');
var ReactDOM = require('react-dom');


var ListParent = React.createClass({
    getInitialState:function(){
        return{
            inputVal: 10
        }
    },
    getDefaultProps: function(){
        
        return {
            users:[{ name: "Anne Montgomery", gender: "Female" },
                    { name: "Annie George", gender: "Female" },
                    { name: "Gary Butler", gender: "Male" },
                    { name: "Lisa Mendoza", gender: "Female" },
                    { name: "Marilyn Henry", gender: "Female" },
                    { name: "Johnny Tucker", gender: "Male" },
                    { name: "Chris Jacobs", gender: "Male" },
                    { name: "Benjamin James", gender: "Male" }]
        }
    },
    handlerChangeInput:function(e){
        this.setState({inputVal:e.target.value})
    },
    render: function () {
        var number = this.state.inputVal;
        return (
            <div>
                <input type="text" placeholder="Enter the number of items" onChange={this.handlerChangeInput} />
                 <ul>
                        {this.props.users.map(function (item, index) {
                            if (index<=(number-1)) return <ListChild key={index} userName={item.name} userGender={item.gender}></ListChild>
         })}
                </ul>
    </div>
   
        )}
});
var ListChild = React.createClass({
    render: function () {
        return (<li>{this.props.userName} : {this.props.userGender}</li>)
               
           
    }
})

var container = document.getElementById('example');
ReactDOM.render(<ListParent><ListChild /></ListParent>, container); 