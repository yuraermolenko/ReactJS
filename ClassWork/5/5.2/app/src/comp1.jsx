
var React = require('react'); 
var ReactDOM = require('react-dom'); 
class Comp1 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div><h1>My List</h1>
        <div>{this.props.children}</div>
            </div>)
    }
}
export default Comp1;