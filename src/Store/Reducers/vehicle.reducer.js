import {
  GET_VEHICLES_START,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_ERROR,
  CREATE_VEHICLE_START,
  CREATE_VEHICLE_SUCCESS,
  CREATE_VEHICLE_ERROR,
  DELETE_VEHICLE_START,
  DELETE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_ERROR,
  EDIT_VEHICLE_START,
  EDIT_VEHICLE_SUCCESS,
  EDIT_VEHICLE_ERROR,
} from '../Actions/vehicle/vehicle.actiontype';

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case 'FILTER_VEHICLES_START':
      return {
        ...state,
      };
    case 'FILTER_VEHICLES_SUCCESS':
      return {
        ...state,
        list: action.payload.results,
        pageCount:action.payload.count
      };
    case 'FILTER_VEHICLES_ERROR':
      return {
        ...state,
      };
    case 'SEARCH_VEHICLES_START':
      return {
        ...state,
      };
    case 'SEARCH_VEHICLES_SUCCESS':
      return {
        ...state,
        list: action.payload.results,
        pageCount:action.payload.count
      };
    case 'SEARCH_VEHICLES_ERROR':
      return {
        ...state,
      };
    case GET_VEHICLES_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload.results,
        pageCount:action.payload.count
      };
    case GET_VEHICLES_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case CREATE_VEHICLE_START:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_VEHICLE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case CREATE_VEHICLE_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case EDIT_VEHICLE_START:
      return {
        ...state,
        isCreating: true,
      };
    case EDIT_VEHICLE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        list: state.list.map(vehicle => {
          if (vehicle.id === action.payload.id) {
            return action.payload;
          }
          return vehicle;
        }),
      };
    case EDIT_VEHICLE_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    case DELETE_VEHICLE_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_VEHICLE_SUCCESS:
      const newList = state.list.filter(vehicle => vehicle.id !== action.payload.id);
      return {
        ...state,
        isDeleting: false,
        list: newList,
      };
    case DELETE_VEHICLE_ERROR:
      return {
        ...state,
        isDeleting: false,
      };
    default:
      return state;
  }
}
