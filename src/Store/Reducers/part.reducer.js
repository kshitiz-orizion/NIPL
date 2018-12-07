import {
  GET_PARTS_START,
  GET_PARTS_SUCCESS,
  GET_PARTS_ERROR,
  CREATE_PART_START,
  CREATE_PART_SUCCESS,
  CREATE_PART_ERROR,
  DELETE_PART_START,
  DELETE_PART_SUCCESS,
  DELETE_PART_ERROR,
  EDIT_PART_START,
  EDIT_PART_SUCCESS,
  EDIT_PART_ERROR,
} from '../Actions/part/part.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_PARTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PARTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload.results,
      };
    case GET_PARTS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_PART_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_PART_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_PART_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_PART_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_PART_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: state.list.map(part => {
          if (part.id === action.payload.id) {
            return action.payload;
          }
          return part;
        }),
      };
    case EDIT_PART_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_PART_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_PART_SUCCESS:
      const newList = state.list.filter(part => part.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_PART_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
