import React from 'react';

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
                    <tr key={index}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.gender}</td>
                    </tr>
                    )
                    })}
                </tbody>
            </table>
            )
    }
}
export default Table;