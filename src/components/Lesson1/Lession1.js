import PropTypes from "prop-types";
import React from "react";
import Filter from './Filter';
import Table from './Table';
import Calc from './Calculator';

class Test extends React.Component {
  render() {
    const {tableData, actions: {onClickButton, onClickRemove} } = this.props;

    return (
     <div>
         <Filter onClickButton={onClickButton}/>
         <Table tableData={tableData} onClickRemove={onClickRemove}/>
         <Calc />
     </div>
    );
  }
}

Test.propTypes = {
    inputValue1: PropTypes.string,
};

export default  Test;

