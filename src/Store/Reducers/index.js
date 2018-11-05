import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
 import authReducer from './auth.reducer';
 import studentReducer from './student.reducer';
 import calendarReducer from './calendar.reducer';
 import todayAttendenceReducer from './todayAttendence.reducer';
export default combineReducers({
  form: formReducer,
  auth:authReducer,
  student:studentReducer,
  calendar:calendarReducer,
  today:todayAttendenceReducer
});
