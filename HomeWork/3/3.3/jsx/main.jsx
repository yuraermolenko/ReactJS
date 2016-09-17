var React = require('react'); 
var ReactDOM = require('react-dom'); 
var Form = React.createClass({ 

    getInitialState: function() {
        return {
           
            nameErr:'',
            emailErr: '', 
            phoneErr: ''
        }
    },
    nameChange:function (e){
        var testVal = /^\w/;

        if (document.getElementsByTagName('input')[0].value.search(testVal) != -1) {
            this.setState({ nameErr: '' });
        }

    },
    emailChange:function (e){
        var test = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]$/;
     
        if (document.getElementsByTagName('input')[1].value.search(test) != -1) {
            this.setState({emailErr: ''}); 
        }

    },
    phoneChange:function (e){
        var test=/^[0-9]+/;
     
        if (document.getElementsByTagName('input')[2].value.search(test) != -1) {
            this.setState({phoneErr: ''}); 
        }

    },
    validateForm: function(e) {
        var nameTest=/^\w+$/;
        var emailTest = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;
        var phoneTest = /^[0-9]+$/;
        if (document.getElementsByTagName('input')[0].value.search(nameTest) == -1) {
            e.preventDefault();
            this.setState({ nameErr: 'only english characters allowed!' });
        };
        if (document.getElementsByTagName('input')[1].value.search(emailTest) == -1) {
            e.preventDefault();
            this.setState({ emailErr: 'invalid email!' });
        };
        if (document.getElementsByTagName('input')[2].value.search(phoneTest) == -1) {
            e.preventDefault();
            this.setState({ phoneErr: 'only numbers and "+" allowed!' });
        };
        
    },
    render: function() {
        return ( 
     <div className="container well">
        <form action="#" name="myForm" onSubmit={this.validateForm}> 
            <input onChange={this.nameChange} className="input-lg form-control" type="text" placeholder="Name" />
             <p className="error">{this.state.nameErr}</p>
            <input onChange={this.emailChange} className="input-lg form-control" type="text" placeholder="Email" />
               <p className="error">{this.state.emailErr}</p>
            <input onChange={this.phoneChange} className="input-lg form-control" type="text" placeholder="Phone" />
               <p className="error">{this.state.phoneErr}</p>
            <textarea onInput={this.mesChange} placeholder="Your Message"></textarea>                 
            <input type="submit" value="Send!"/>
        </form>
    </div>
    )}
})

var container = document.getElementById('example');
ReactDOM.render(<Form />, container); 