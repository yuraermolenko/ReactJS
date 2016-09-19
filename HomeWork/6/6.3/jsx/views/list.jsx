import React from 'react';
import {Link} from 'react-router';
import users from './users.js';
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){     
        return (<ul> {
                users.map((user,index)=>{
    return(
        <li key={index}><Link to={{pathname: `/list/${user.id}`, query: {...user}}}>{user.first_name} {user.last_name}</Link></li>
    )})
            }</ul>
           )
        }
}

export default List;