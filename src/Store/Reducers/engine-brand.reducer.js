import {
  GET_ENGINEBRANDS_START,
  GET_ENGINEBRANDS_SUCCESS,
  GET_ENGINEBRANDS_ERROR,
  CREATE_ENGINEBRAND_START,
  CREATE_ENGINEBRAND_SUCCESS,
  CREATE_ENGINEBRAND_ERROR,
  DELETE_ENGINEBRAND_START,
  DELETE_ENGINEBRAND_SUCCESS,
  DELETE_ENGINEBRAND_ERROR,
  EDIT_ENGINEBRAND_START,
  EDIT_ENGINEBRAND_SUCCESS,
  EDIT_ENGINEBRAND_ERROR,
} from '../Actions/engine-brand/engine-brand.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_ENGINEBRANDS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ENGINEBRANDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload.results,
      };
    case GET_ENGINEBRANDS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_ENGINEBRAND_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_ENGINEBRAND_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_ENGINEBRAND_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_ENGINEBRAND_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_ENGINEBRAND_SUCCESS:
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
    case EDIT_ENGINEBRAND_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_ENGINEBRAND_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_ENGINEBRAND_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_ENGINEBRAND_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
