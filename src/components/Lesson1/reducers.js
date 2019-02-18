import { CHANGE_INPUT_VALUE1, ADD_BUTTON, REMOVE_BUTTON } from './constants';

const initialState = {
    inputValue1: '',
    tableData: [],
    number1: '',
    number2: '',

}

export default function test(state = initialState, action) {
  switch (action.type) {
    // case CHANGE_INPUT_VALUE1: {
    //     return {
    //         ...state,
    //         inputValue1: action.value,
    //     }
    // }

    case ADD_BUTTON: {
        return {
            ...state,
            tableData: state.tableData.concat(action.data)
        }
    }

    // case CHANGE_INPUT_NUMBER1: {
    //     return {
    //         ...state,
    //         inputValue1: action.number1,
    //     }
    // }

    // case CHANGE_INPUT_NUMBER2: {
    //     return {
    //         ...state,
    //         inputValue1: action.number2,
    //     }
    // }

    case REMOVE_BUTTON: {
        const item = action.item
        return {
            ...state,
            tableData: state.tableData.filter(item => item !== action.item),

        }
    }
    default:
        return state;
    }
}
