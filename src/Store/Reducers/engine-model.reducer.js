import {
  GET_ENGINEMODELS_START,
  GET_ENGINEMODELS_SUCCESS,
  GET_ENGINEMODELS_ERROR,
  CREATE_ENGINEMODEL_START,
  CREATE_ENGINEMODEL_SUCCESS,
  CREATE_ENGINEMODEL_ERROR,
  DELETE_ENGINEMODEL_START,
  DELETE_ENGINEMODEL_SUCCESS,
  DELETE_ENGINEMODEL_ERROR,
  EDIT_ENGINEMODEL_START,
  EDIT_ENGINEMODEL_SUCCESS,
  EDIT_ENGINEMODEL_ERROR,
} from '../Actions/engine-model/engine-model.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_ENGINEMODELS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_ENGINEMODELS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case GET_ENGINEMODELS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_ENGINEMODEL_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_ENGINEMODEL_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_ENGINEMODEL_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_ENGINEMODEL_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_ENGINEMODEL_SUCCESS:
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
    case EDIT_ENGINEMODEL_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_ENGINEMODEL_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_ENGINEMODEL_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_ENGINEMODEL_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
