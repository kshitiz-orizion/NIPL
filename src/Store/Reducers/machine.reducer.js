import {
  GET_MACHINES_START,
  GET_MACHINES_SUCCESS,
  GET_MACHINES_ERROR,
  CREATE_MACHINE_START,
  CREATE_MACHINE_SUCCESS,
  CREATE_MACHINE_ERROR,
  DELETE_MACHINE_START,
  DELETE_MACHINE_SUCCESS,
  DELETE_MACHINE_ERROR,
  EDIT_MACHINE_START,
  EDIT_MACHINE_SUCCESS,
  EDIT_MACHINE_ERROR,
  GET_MACHINE_REMARK_START,
  GET_MACHINE_REMARK_SUCCESS,
  GET_MACHINE_REMARK_ERROR,
  DELETE_MACHINE_REMARK_START,
  DELETE_MACHINE_REMARK_SUCCESS,
  DELETE_MACHINE_REMARK_ERROR
} from '../Actions/machine/machine.actiontype';

export default function(state = { list: [],remark:[] }, action) {
  switch (action.type) {
    case GET_MACHINES_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_MACHINES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case GET_MACHINES_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_MACHINE_REMARK_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_MACHINE_REMARK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        remark: action.payload,
      };
    case GET_MACHINE_REMARK_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_MACHINE_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_MACHINE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_MACHINE_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_MACHINE_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_MACHINE_SUCCESS:
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
    case EDIT_MACHINE_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_MACHINE_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_MACHINE_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_MACHINE_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
      case DELETE_MACHINE_REMARK_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_MACHINE_REMARK_SUCCESS:
      const newRemark = state.remark.filter(machine => machine.id !== action.payload);
      return {
        ...state,
        isDeleting: false,
        remark: newRemark,
      };
    case DELETE_MACHINE_REMARK_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
