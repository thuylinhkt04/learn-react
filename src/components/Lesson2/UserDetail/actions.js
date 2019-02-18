import { START_LOADING, DONE_LOADING, LOAD_USER_SUCCESS} from './constants';

const startLoading = () => ({
  type: START_LOADING
});

const doneLoading = () => ({
  type: DONE_LOADING
});

const loadUserSuccess = (user) => ({
  type: LOAD_USER_SUCCESS,
  user
});


export const loadUser = (id) => (dispatch) => {
  dispatch(startLoading());
  fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      dispatch(loadUserSuccess(json.data));
      dispatch(doneLoading());
    })
    .catch((error) => {
      throw error;
    });
 
}