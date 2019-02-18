import React from 'react';
import { Table as BsTable, Pagination } from 'react-bootstrap';
import Loading from '../../Loading';
import Row from './Row';
import './style.scss';
import { UsersTableProps } from './types';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
     this.props.actions.loadUsers();
  }

  render() {
    const { users, isLoading } = this.props;
    const loading = (<tr><td colSpan="4"><Loading/></td></tr>);
    const emptyData = (<tr><td colSpan="4" className="text-center">No User Found</td></tr>);
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    return (
      <div>
        <BsTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            isLoading ? loading :
            users.length ?
            users.map((user, index) => (
              <Row key={index} user={user}/>
            )) : emptyData
          }
          </tbody>
        </BsTable>
        <Pagination>{items}</Pagination>
      </div>
    );
  }
}

Table.propTypes = UsersTableProps;

Table.defaultProps = {
  data: []
}
