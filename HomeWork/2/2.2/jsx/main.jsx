var React = require('react');
var ReactDOM = require('react-dom');


var ListParent = React.createClass({
    getInitialState:function(){
        return{
            inputVal: 10,
            color:"black"
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
                    { name: "Benjamin James", gender: "Male" }],
           
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
                 <ul style={{"color":this.state.color}}>
                        {this.props.users.map(function (item, index) {
                            if (index<=(number-1)) return <ListChild key={index} userName={item.name} userGender={item.gender}></ListChild>
                        })}
                </ul>
    </div>
   
        )
    },
   
});
var ListChild = React.createClass({
    getInitialState: function () {
        return {
            
            color: "black"
        }
    },
    componentWillMount: function () {
        var newColor = function getRandomColor() {
            var h = Math.floor(Math.random() * (255 - 1) + 1);
            var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
            var l = '50%';
            var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
            return randomColor;
        };
        this.setState({color:newColor()})
    },
    render: function () {
        return (<li style={{"color":this.state.color}}>{this.props.userName} : {this.props.userGender}</li>)
               
           
}
})

var container = document.getElementById('example');
ReactDOM.render(<ListParent><ListChild /></ListParent>, container); 