import React from 'react';
import {Link} from 'react-router';
import users from './users.js';
class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <table>
                <tbody>
                    {users.map((user,index)=>{
                    return (
                    <tr key={index}><Link to={{pathname: `/table/${user.id}`, query: {...user}}}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.gender}</td>
                        </Link>
                    </tr>
                    )
                    })}
                </tbody>
            </table>
            )
    }
}
export default Table;