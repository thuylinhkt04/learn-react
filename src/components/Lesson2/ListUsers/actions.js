import { START_LOADING, DONE_LOADING, LOAD_USERS_SUCCESS} from './constants';

const startLoading = () => ({
  type: START_LOADING
});

const doneLoading = () => ({
  type: DONE_LOADING
});

const loadUsersSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  users
});


export const loadUsers = () => (dispatch) => {
  dispatch(startLoading());
  fetch('https://reqres.in/api/users?per_page=12')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      dispatch(loadUsersSuccess(json.data));
      dispatch(doneLoading());
    })
    .catch((error) => {
      throw error;
    });
}