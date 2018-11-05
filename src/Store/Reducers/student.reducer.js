import {
  GET_STUDENTS_START,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
  CREATE_STUDENT_START,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_ERROR,
  DELETE_STUDENT_START,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_ERROR,
  EDIT_STUDENT_START,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_ERROR,
} from '../Actions/student/student.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_STUDENTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case GET_STUDENTS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_STUDENT_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_STUDENT_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_STUDENT_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_STUDENT_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: state.list.map(student => {
          if (student.id === action.payload.id) {
            return action.payload;
          }
          return student;
        }),
      };
    case EDIT_STUDENT_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_STUDENT_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_STUDENT_SUCCESS:
      const newList = state.list.filter(student => student.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_STUDENT_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
