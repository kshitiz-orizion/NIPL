import {
  GET_CATEGORYS_START,
  GET_CATEGORYS_SUCCESS,
  GET_CATEGORYS_ERROR,
  CREATE_CATEGORY_START,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_ERROR,
  DELETE_CATEGORY_START,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
  EDIT_CATEGORY_START,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_ERROR,
} from '../Actions/category/category.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_CATEGORYS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CATEGORYS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload.results,
      };
    case GET_CATEGORYS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_CATEGORY_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_CATEGORY_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_CATEGORY_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_CATEGORY_SUCCESS:
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
    case EDIT_CATEGORY_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_CATEGORY_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_CATEGORY_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_CATEGORY_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
