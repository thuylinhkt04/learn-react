import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import  Table from './Table';

function mapStateToProps(state) {
  const { ListUsers : {users, isLoading}} = state;
  return {
    users,
    isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
