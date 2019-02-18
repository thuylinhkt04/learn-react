import PropTypes from "prop-types";
import React from "react";

class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            value1: '',
            error: ''
        };
    }

    onChangeInput1 = (event) => {
      this.setState({
          value1: event.target.value
      })
    }

    onClick = () => {
        const { onClickButton } = this.props;
        const { value1 } = this.state;
        onClickButton(value1);
        if (value1 === '') {
            this.setState({
                error: 'Pls input...'
            })
        }
    }

    render() {
        const { value1, error } = this.state;
        return (
            <div>
                <input type="text" value={value1} onChange={this.onChangeInput1}/>
                <span className="error">{error}</span>
                <button type="submit" onClick={this.onClick}>Add</button>
            </div>
        );
    }
}

Filter.propTypes = {
    value1: PropTypes.string
};

export default Filter;
