var React = require('react');
var ReactDOM = require('react-dom');


var ListParent = React.createClass({
    getInitialState:function(){
        return {
            view: true,
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
                    { name: "Benjamin James", gender: "Male" }],
           
        }
    },
    handlerChangeView: function () {
        this.setState({ view: !this.state.view })
    },
    handlerChangeInput:function(e){
        this.setState({inputVal:e.target.value})
    },
    render: function () {
        var number = this.state.inputVal;
        var view = this.state.view;
        return (
            <div>
                <input type="text" placeholder="Enter the number of items" onChange={this.handlerChangeInput} />
                <input type="checkbox" onChange={this.handlerChangeView} defaultChecked={this.state.view}  /><label>View: {this.state.view?"List":"Table"}</label>
                 <div>
                      {view? <ul>
                        {this.props.users.map(function (item, index) {
                            if (index<=(number-1)) return <ListChild key={index} userName={item.name} userGender={item.gender}></ListChild>
                        })}
                </ul> :  <table><tbody>{this.props.users.map(function (item, index) {
                             if (index<=(number-1)) return <TableChild key={index*2} userName={item.name} userGender={item.gender}></TableChild>
                             })}
                         </tbody>
                     </table>
                     }
                </div>
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
        this.setState({ color: newColor() })
    },
    render: function () {
        return (<li style={{ "color": this.state.color } }>{this.props.userName} : {this.props.userGender}</li>)


    }
});
var TableChild = React.createClass({
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
        return (<tr><td style={{"color":this.state.color}}>{this.props.userName}</td><td style={{"color":this.state.color}}>{this.props.userGender}</td></tr>)           
}
})

var container = document.getElementById('example');
ReactDOM.render(<ListParent><ListChild /><TableChild/></ListParent>, container); 