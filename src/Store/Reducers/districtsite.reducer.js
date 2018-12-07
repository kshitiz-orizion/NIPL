import {
  GET_DISTRICTSITES_START,
  GET_DISTRICTSITES_SUCCESS,
  GET_DISTRICTSITES_ERROR,
  CREATE_DISTRICTSITE_START,
  CREATE_DISTRICTSITE_SUCCESS,
  CREATE_DISTRICTSITE_ERROR,
  DELETE_DISTRICTSITE_START,
  DELETE_DISTRICTSITE_SUCCESS,
  DELETE_DISTRICTSITE_ERROR,
  EDIT_DISTRICTSITE_START,
  EDIT_DISTRICTSITE_SUCCESS,
  EDIT_DISTRICTSITE_ERROR,
} from '../Actions/district-site/district-site.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case GET_DISTRICTSITES_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_DISTRICTSITES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload.results,
      };
    case GET_DISTRICTSITES_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_DISTRICTSITE_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_DISTRICTSITE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_DISTRICTSITE_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_DISTRICTSITE_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_DISTRICTSITE_SUCCESS:
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
    case EDIT_DISTRICTSITE_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_DISTRICTSITE_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_DISTRICTSITE_SUCCESS:
      const newList = state.list.filter(machine => machine.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_DISTRICTSITE_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
