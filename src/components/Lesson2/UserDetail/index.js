import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import  { Detail as UserDetail} from './Detail';

function mapStateToProps(state) {
  const { UserDetail: {user, isLoading}} = state;
  return {
    user,
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
)(UserDetail);
