import PropTypes from "prop-types";
import React from "react";

class Calc extends React.Component {
    constructor() {
        super();
        this.state = {
            number1: '',
            number2: '',
            total: ''
        };
    }

    onChangeNumber1 = (event) => {
        this.setState({
            number1: event.target.value
        })
    }

    onChangeNumber2 = (event) => {
        this.setState({
            number2: event.target.value
        })
    }

    onClickCong = () => {
        const { number1, number2 } = this.state;
        this.setState({
            total: parseInt(number1) + parseInt(number2)
        })
    }
    onClickTru = () => {
        const { number1, number2 } = this.state;
        this.setState({
            total: number1 - number2
        })
    }
    onClickNhan = () => {
        const { number1, number2 } = this.state;
        this.setState({
            total: number1 * number2
        })
    }
    onClickChia = () => {
        const { number1, number2 } = this.state;
        this.setState({
            total: number1 / number2
        })
    }

    render() {
        const { number1, number2, total} = this.state;
        return (
            <div>
                <p>My Calculator</p>
                <input type="number" value={number1} onChange={this.onChangeNumber1}/>
                <input type="number" value={number2} onChange={this.onChangeNumber2}/>
                <div>
                    <span className="calc" onClick={this.onClickCong}>+</span>
                    <span className="calc" onClick={this.onClickTru}>-</span>
                    <span className="calc" onClick={this.onClickNhan}>x</span>
                    <span className="calc" onClick={this.onClickChia}>/</span>
                </div>
                <p>
                    <span>Ket qua  </span>
                    <span>{total}</span>
                </p>
            </div>
        );
    }
}
Calc.propTypes = {
    number1: PropTypes.number,
    number2: PropTypes.number
};

export default Calc;
