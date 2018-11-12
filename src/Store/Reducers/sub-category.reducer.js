import {
  GET_SUBCATEGORYS_START,
  GET_SUBCATEGORYS_SUCCESS,
  GET_SUBCATEGORYS_ERROR,
  CREATE_SUBCATEGORY_START,
  CREATE_SUBCATEGORY_SUCCESS,
  CREATE_SUBCATEGORY_ERROR,
  DELETE_SUBCATEGORY_START,
  DELETE_SUBCATEGORY_SUCCESS,
  DELETE_SUBCATEGORY_ERROR,
  EDIT_SUBCATEGORY_START,
  EDIT_SUBCATEGORY_SUCCESS,
  EDIT_SUBCATEGORY_ERROR,
} from '../Actions/sub-category/sub-category.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_SUBCATEGORYS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_SUBCATEGORYS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case GET_SUBCATEGORYS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_SUBCATEGORY_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_SUBCATEGORY_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_SUBCATEGORY_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_SUBCATEGORY_SUCCESS:
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
    case EDIT_SUBCATEGORY_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_SUBCATEGORY_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_SUBCATEGORY_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_SUBCATEGORY_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
