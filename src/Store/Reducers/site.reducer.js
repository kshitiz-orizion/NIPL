import {
  GET_SITES_START,
  GET_SITES_SUCCESS,
  GET_SITES_ERROR,
  CREATE_SITE_START,
  CREATE_SITE_SUCCESS,
  CREATE_SITE_ERROR,
  DELETE_SITE_START,
  DELETE_SITE_SUCCESS,
  DELETE_SITE_ERROR,
  EDIT_SITE_START,
  EDIT_SITE_SUCCESS,
  EDIT_SITE_ERROR,
} from '../Actions/site/site.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_SITES_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_SITES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload.results,
      };
    case GET_SITES_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_SITE_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_SITE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_SITE_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_SITE_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_SITE_SUCCESS:
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
    case EDIT_SITE_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_SITE_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_SITE_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_SITE_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
