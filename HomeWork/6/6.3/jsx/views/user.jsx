import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let userProps = this.props.location.query;
        return(
           <div>
               <h1>User {userProps.first_name}</h1>
               <table>
                   <tbody>
                       <tr><td>First name: {userProps.first_name}</td></tr>                      
                       <tr><td>Last name: {userProps.last_name}</td></tr>
                       <tr><td>Email: {userProps.email}</td></tr>
                       <tr><td>Gender: {userProps.gender}</td></tr>
                       <tr><td>User IP: {userProps.ip_address}</td></tr>
                   </tbody>
               </table>
           </div>
        )
    }
}

export default User;