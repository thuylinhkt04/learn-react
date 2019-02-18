import React from 'react';
import { Link } from 'react-router-dom';
import { UserRowProps } from './types';

export default class Row extends React.Component {
  
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td className="list-users-actions">
          <Link to={`/users/${user.id}`}>View</Link>
          <a href="javascript:;">Edit</a>
          <a href="javascript:;">Delete</a>
        </td>
      </tr>
    );
  }
}

Row.propTypes = UserRowProps;

Row.defaultProps = {
  user: {}
};

