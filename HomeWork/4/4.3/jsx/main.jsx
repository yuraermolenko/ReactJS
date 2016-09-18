 var React = require('react');
 var ReactDOM = require('react-dom');

class Person {
    constructor(firstName="John",lastName="Doe",age=0,gender="Male") {
        this.firstName = firstName;
        this.lastName=lastName;
        this.age=age;
        this.gender=gender;       
    }
        fullName(){
            return `${this.firstName} ${this.lastName}`;
        }
        sayHi() {
            alert(`Hello, my name is ${this.fullName()}`);
        }
    }
    class User extends Person{
        constructor(firstName,lastName,age,gender,signUpToDate="01.01.1970",id)
        {
        super(firstName,lastName,age,gender);
        this.signUpToDate=signUpToDate;
        this.id=id;
    }
    fullName(){
        super.fullName();
    }
    sayHi(){
        super.sayHi();
    }
    signUpToDate(date){

    }
}

let user1=new User("Alastor","Green",35,"Male","10.09.2016",123);
let user2=new User("Name1","Surnameme",35,"Male","11.09.2016",1234);
let user3=new User("Name2","Green",35,"Female","12.09.2016",12345);
let user4=new User("Name3","Green",35,"Male","13.09.2016",123456);
let user5=new User("Name4","Green",35,"Female","14.09.2016",1234567);
let users=[user1,user2,user3,user4,user5];
        
     

class Table extends React.Component { 		
    constructor(props) {
        super(props);        
    } 
       
    render() {
        return (
           <table>
               <tbody>{users.map((user,index)=>{
               return <tr key={index}><td>{user.firstName}</td><td>{user.lastName}</td><td>{user.age}</td><td>{user.gender}</td><td>{user.signUpToDate}</td><td>{user.id}</td></tr>})
               }                   
               </tbody>
           </table>
)
    }
}        
var container = document.getElementById('example'); 
ReactDOM.render(<Table/>, container);