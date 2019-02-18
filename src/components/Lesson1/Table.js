import PropTypes from "prop-types";
import React from "react";

class Table extends React.Component {
    onClick = (item) => {
        const { onClickRemove } = this.props;
        onClickRemove(item);
    }

    render() {
        const { tableData } = this.props;
        const row = tableData.map((item, index) => {
            return (
                <li key={index} className="list-item">
                    <span>{index + 1}</span>
                    <span>{item.name}</span>
                    <span className="remove-btn" onClick={this.onClick.bind(this, item)}>Remove</span>
                </li>
            )
        })
        return (
            <ul>
                {row}
            </ul>
        );
    }
}

Table.propTypes = {

};

export default Table;
