import { CHANGE_INPUT_VALUE1, ADD_BUTTON, REMOVE_BUTTON, CHANGE_INPUT_NUMBER1, CHANGE_INPUT_NUMBER2 } from './constants'

// export const onChangeInput1 = (value) => (dispatch) => {
//     return dispatch({
//         type: CHANGE_INPUT_VALUE1,
//         value
//     });
// };

export const onClickButton = (value1) => (dispatch) => {
    const data = { 'name': value1 }
    return dispatch({
        type: ADD_BUTTON,
        data
    });
};

export const onClickRemove = (item) => (dispatch) => {
    return dispatch({
        type: REMOVE_BUTTON,
        item
    });
}

// export const onChangeNumber1 = (number1) => (dispatch) => {
//     return dispatch({
//         type: CHANGE_INPUT_NUMBER1,
//         number1
//     });
// }

// export const onChangeNumber2 = (number2) => (dispatch) => {
//     return dispatch({
//         type: CHANGE_INPUT_NUMBER2,
//         number2
//     });
// }

export const onClickCong = () => (dispatch) => {
    return dispatch({
        type: SUBMIT_BUTTON_CONG,

    })
}
