import {
  GET_CONDITIONS_START,
  GET_CONDITIONS_SUCCESS,
  GET_CONDITIONS_ERROR,
  CREATE_CONDITION_START,
  CREATE_CONDITION_SUCCESS,
  CREATE_CONDITION_ERROR,
  DELETE_CONDITION_START,
  DELETE_CONDITION_SUCCESS,
  DELETE_CONDITION_ERROR,
  EDIT_CONDITION_START,
  EDIT_CONDITION_SUCCESS,
  EDIT_CONDITION_ERROR,
} from '../Actions/condition/condition.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_CONDITIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CONDITIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload.results,
      };
    case GET_CONDITIONS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_CONDITION_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_CONDITION_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_CONDITION_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_CONDITION_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_CONDITION_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: state.list.map(machine => {
          if (machine.id === action.payload.id) {
            return action.payload;
          }
          return machine;
        }),
      };
    case EDIT_CONDITION_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_CONDITION_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_CONDITION_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_CONDITION_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
