import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import Lesson1 from './Lession1';
import './style.scss';

function mapStateToProps(state) {
    const { Lesson1 : {inputValue1, tableData}} = state;
    return {
        inputValue1,
        tableData
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
)(Lesson1);

