var React = require('react');
var ReactDOM = require('react-dom');

class ListProps extends React.Component { 
    constructor(props){
        super(props)
        this.state={
            showProps:false
        };
        this.handler = this.handler.bind(this);
        
    }	
    handler(){
        this.setState({showProps:!this.state.showProps}) 
    }
    render() {
        let props = [];
        for (var key in this.props) {

        }
        
        return (           
            <div>
                <button onClick={this.handler}> Show List</button>
                <ul>
                    {(this.state.showProps)?Object.keys(this.props).map((prop, index) => {
                    return <li key={index}>{`${prop} = ${this.props[prop]};`}</li>
                    }):""}
                </ul>
            </div>
            )
        }
}
 
 
        
    var container = document.getElementById('example'); 
        ReactDOM.render(<ListProps a="3" b="4" isNumber={true}/>, container);