import { START_LOADING, DONE_LOADING, LOAD_USERS_SUCCESS} from './constants';
const initialState= {
    isLoading: false,
    users: []
}

function listUsers (state = initialState, action) {
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
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      }  
    default:
      return state
  }
}

export default listUsers;
