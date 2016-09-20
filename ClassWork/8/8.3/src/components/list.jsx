var React = require('react');
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return(
            <ul>
                {(this.props.showList) ? this.props.users.map((user, index) => {
                    return(
                    <li key={index}>{user.id} {user.first_name} {user.last_name} {user.email} {user.gender}</li>
                    )
                }):''}
            </ul>
)
    }
}
module.exports= List