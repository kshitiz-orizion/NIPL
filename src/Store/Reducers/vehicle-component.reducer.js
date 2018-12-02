import {
   GET_VEHICLE_TYPE_START, 
GET_VEHICLE_TYPE_SUCCESS,
 GET_VEHICLE_TYPE_ERROR,
 GET_VEHICLE_MAKE_START,
GET_VEHICLE_MAKE_SUCCESS,
GET_VEHICLE_MAKE_ERROR ,
GET_VEHICLE_MODEL_START,
GET_VEHICLE_MODEL_SUCCESS,
GET_VEHICLE_MODEL_ERROR,
GET_VEHICLE_STATUS_START,
GET_VEHICLE_STATUS_SUCCESS,
GET_VEHICLE_STATUS_ERROR,
GET_VEHICLE_OWNERSHIP_START,
GET_VEHICLE_OWNERSHIP_SUCCESS,
GET_VEHICLE_OWNERSHIP_ERROR,
GET_VEHICLE_COLOR_START,
GET_VEHICLE_COLOR_SUCCESS ,
GET_VEHICLE_COLOR_ERROR,
 GET_VEHICLE_BODY_START,
GET_VEHICLE_BODY_SUCCESS,
 GET_VEHICLE_BODY_ERROR,
GET_VEHICLE_DRIVE_START,
GET_VEHICLE_DRIVE_SUCCESS,
GET_VEHICLE_DRIVE_ERROR,
GET_VEHICLE_BRAKE_START,
GET_VEHICLE_BRAKE_SUCCESS,
GET_VEHICLE_BRAKE_ERROR,
 GET_VEHICLE_FUEL_START,
GET_VEHICLE_FUEL_SUCCESS,
 GET_VEHICLE_FUEL_ERROR,
} from '../Actions/vehicle-component/vehicle-component.actiontype';

export default function(state = { type: [],make:[],model:[],status:[],ownership:[],color:[],body:[],drive:[],brake:[],fuel:[] }, action) {
  switch (action.type) {
    case GET_VEHICLE_FUEL_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLE_FUEL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fuel: action.payload,
      };
    case GET_VEHICLE_FUEL_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_VEHICLE_BRAKE_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLE_BRAKE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        brake: action.payload,
      };
    case GET_VEHICLE_BRAKE_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_VEHICLE_DRIVE_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLE_DRIVE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        drive: action.payload,
      };
    case GET_VEHICLE_DRIVE_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_VEHICLE_BODY_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLE_BODY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        body: action.payload,
      };
    case GET_VEHICLE_BODY_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_VEHICLE_COLOR_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLE_COLOR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        color: action.payload,
      };
    case GET_VEHICLE_COLOR_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_VEHICLE_OWNERSHIP_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLE_OWNERSHIP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ownership: action.payload,
      };
    case GET_VEHICLE_OWNERSHIP_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_VEHICLE_STATUS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLE_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        status: action.payload,
      };
    case GET_VEHICLE_STATUS_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_VEHICLE_MODEL_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLE_MODEL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        model: action.payload,
      };
    case GET_VEHICLE_MODEL_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_VEHICLE_MAKE_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLE_MAKE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        make: action.payload,
      };
    case GET_VEHICLE_MAKE_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    case GET_VEHICLE_TYPE_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_VEHICLE_TYPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        type: action.payload,
      };
    case GET_VEHICLE_TYPE_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
