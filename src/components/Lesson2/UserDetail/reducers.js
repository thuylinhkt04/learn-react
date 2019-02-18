import { START_LOADING, DONE_LOADING, LOAD_USER_SUCCESS} from './constants';
const initialState= {
    isLoading: false,
    user: {}
}

function userDetail (state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case DONE_LOADING:
      return {
        ...state,
        isLoading: false
      }  
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      }  
    default:
      return state
  }
}

export default userDetail;
