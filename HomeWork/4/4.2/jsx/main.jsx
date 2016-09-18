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
        constructor(){
        super(firstName="John",lastName="Doe",age=0,gender="Male",signUpToDate="01.01.1970",id=1);
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
        
        