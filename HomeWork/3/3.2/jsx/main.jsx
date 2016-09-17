var React = require('react');
var ReactDOM = require('react-dom');
var Calculate = React.createClass({
    getInitialState: function () {
        return {
            a: 0,
            b: 0,
            result: 0,
            inputError: ''
        }

    },
    inputA: function (e) {
        var testVal = /^[0-9]/;
        this.setState({ a: e.target.value });
        if ((document.getElementsByTagName('input')[0].value.search(testVal) != -1) && (document.getElementsByTagName('input')[1].value.search(testVal) != -1)) {
            this.setState({ inputError: '' });
        };
    },
    inputB: function (e) {
        var testVal = /^[0-9]/;
        this.setState({ b: e.target.value });
        if ((document.getElementsByTagName('input')[0].value.search(testVal) != -1) && (document.getElementsByTagName('input')[1].value.search(testVal) != -1)) {
            this.setState({ inputError: '' });
        };
    },
    calc: function (e) {
        var testVal = /^[0-9]{1,10}$/;
        if (document.getElementsByTagName('input')[0].value.search(testVal) == -1) {
            this.setState({ inputError: 'only 1 to 10 numbers allowed!' });
            return;
        };
        if (document.getElementsByTagName('input')[1].value.search(testVal) == -1) {
            this.setState({ inputError: 'only 1 to 10 numbers allowed!' });
            return;
        };
        var arg = e.target.dataset.value;
        switch (arg) {
            case "+":
                this.setState({ result: parseInt(this.state.a) + parseInt(this.state.b) });
                break;
            case "-":
                this.setState({ result: parseInt(this.state.a) - parseInt(this.state.b) });
                break;
            case "/":
                this.setState({ result: parseInt(this.state.a) / parseInt(this.state.b) });
                break;
            case "*":
                this.setState({ result: parseInt(this.state.a) * parseInt(this.state.b) });
                break;
        }

    },
    render: function () {
        return (
            <div>
    <input type="text" placeholder="Enter the first number" onInput={this.inputA } />
    <input type="text" placeholder="Enter the first number" onInput={this.inputB } />
     <p>{this.state.inputError}</p>
    <button data-value="+" onClick={this.calc }>+</button>
    <button data-value="-" onClick={this.calc }>-</button>
    <button data-value="/" onClick={this.calc }>/</button>
    <button data-value="*" onClick={this.calc }>*</button>
    <p>{this.state.result}</p>
   </div>)
    }
});
var container = document.getElementById('example');
ReactDOM.render(<Calculate></Calculate>, container);