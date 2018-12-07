import {
  GET_MACHINEBRANDS_START,
  GET_MACHINEBRANDS_SUCCESS,
  GET_MACHINEBRANDS_ERROR,
  CREATE_MACHINEBRAND_START,
  CREATE_MACHINEBRAND_SUCCESS,
  CREATE_MACHINEBRAND_ERROR,
  DELETE_MACHINEBRAND_START,
  DELETE_MACHINEBRAND_SUCCESS,
  DELETE_MACHINEBRAND_ERROR,
  EDIT_MACHINEBRAND_START,
  EDIT_MACHINEBRAND_SUCCESS,
  EDIT_MACHINEBRAND_ERROR,
} from '../Actions/machine-brand/machine-brand.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_MACHINEBRANDS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_MACHINEBRANDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload.results,
      };
    case GET_MACHINEBRANDS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_MACHINEBRAND_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_MACHINEBRAND_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_MACHINEBRAND_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_MACHINEBRAND_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_MACHINEBRAND_SUCCESS:
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
    case EDIT_MACHINEBRAND_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_MACHINEBRAND_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_MACHINEBRAND_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_MACHINEBRAND_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
