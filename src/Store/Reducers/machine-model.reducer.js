import {
  GET_MACHINEMODELS_START,
  GET_MACHINEMODELS_SUCCESS,
  GET_MACHINEMODELS_ERROR,
  CREATE_MACHINEMODEL_START,
  CREATE_MACHINEMODEL_SUCCESS,
  CREATE_MACHINEMODEL_ERROR,
  DELETE_MACHINEMODEL_START,
  DELETE_MACHINEMODEL_SUCCESS,
  DELETE_MACHINEMODEL_ERROR,
  EDIT_MACHINEMODEL_START,
  EDIT_MACHINEMODEL_SUCCESS,
  EDIT_MACHINEMODEL_ERROR,
} from '../Actions/machine-model/machine-model.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_MACHINEMODELS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_MACHINEMODELS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload.results,
        errorList:{}
      };
    case GET_MACHINEMODELS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_MACHINEMODEL_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_MACHINEMODEL_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_MACHINEMODEL_ERROR:
      return {
        ...state,
        isCreating: false,
        errorList:action.payload
      };
    case EDIT_MACHINEMODEL_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_MACHINEMODEL_SUCCESS:
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
    case EDIT_MACHINEMODEL_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_MACHINEMODEL_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_MACHINEMODEL_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_MACHINEMODEL_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
