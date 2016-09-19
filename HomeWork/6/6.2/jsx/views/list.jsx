import React from 'react';

import users from './users.js';
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){     
        return (<ul> {
                users.map((user,index)=>{
    return(
        <li key={index}>{user.first_name} {user.last_name}</li>
    )})
            }</ul>
           )
        }
}

export default List;