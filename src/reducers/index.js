import { combineReducers } from 'redux';
import Lesson1 from '../components/Lesson1/reducers';
import ListUsers from '../components/Lesson2/ListUsers/reducers';
import UserDetail from '../components/Lesson2/UserDetail/reducers';

const rootReducer = combineReducers({
  Lesson1,
  ListUsers,
  UserDetail
});

export default rootReducer;
