import {
  GET_STATESITES_START,
  GET_STATESITES_SUCCESS,
  GET_STATESITES_ERROR,
  CREATE_STATESITE_START,
  CREATE_STATESITE_SUCCESS,
  CREATE_STATESITE_ERROR,
  DELETE_STATESITE_START,
  DELETE_STATESITE_SUCCESS,
  DELETE_STATESITE_ERROR,
  EDIT_STATESITE_START,
  EDIT_STATESITE_SUCCESS,
  EDIT_STATESITE_ERROR,
} from '../Actions/state-site/state-site.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_STATESITES_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_STATESITES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case GET_STATESITES_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_STATESITE_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_STATESITE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_STATESITE_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_STATESITE_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_STATESITE_SUCCESS:
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
    case EDIT_STATESITE_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_STATESITE_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_STATESITE_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_STATESITE_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
