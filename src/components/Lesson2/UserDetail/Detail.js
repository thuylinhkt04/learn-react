import React from 'react';
import Loading from '../../Loading';
import { Link } from 'react-router-dom';
import { UserDetailProps } from './types';


export class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {match : {params : {id}}} = this.props;
    this.props.actions.loadUser(id);
  }

  render() {
    const {user, isLoading} = this.props;
    return (
      <div>
        { 
          isLoading ? <Loading/> : 
          <div>
            <h1>Lesson 2- User Detail</h1>
            <div className="row">
              <div className="col-sm-2"><strong>Avatar</strong></div>
              <div className="col-sm-10"><img src={user.avatar} alt=""/></div>
            </div>
            <div className="row">
              <div className="col-sm-2"><strong>Id</strong></div>
              <div className="col-sm-10">{user.id}</div>
            </div>
            <div className="row">
              <div className="col-sm-2"><strong>First Name</strong></div>
              <div className="col-sm-10">{user.first_name}</div>
            </div>
            <div className="row">
              <div className="col-sm-2"><strong>Last Name</strong></div>
              <div className="col-sm-10">{user.last_name}</div>
            </div>
          </div>
        }
        <div><Link to="/lesson2">Back to List Users</Link></div>
      </div>
    );
  }
}

Detail.propTypes = UserDetailProps;

Detail.defaultProps = {
  user: {}
}
export default Detail;
