var React = require('react');  


class InputComp extends React.Component {
    constructor(props) {
        super(props)
        this.inputHandler = this.inputHandler.bind(this)
    }
    inputHandler(e) {
        this.props.pushText(e.target.value)
    }
   
    render() {
       
    return (
            <div className="panell well">
                <input id="text" type="text" onInput={this.inputHandler}/>
               
                <h1>{this.props.text}</h1>
            </div>
        )
    }
} 

module.exports = InputComp
