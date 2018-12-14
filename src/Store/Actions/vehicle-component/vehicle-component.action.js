import { toast } from 'react-toastify';
import axiosService from '../../../Inits/axios';
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
} from './vehicle-component.actiontype';
export const getVehicleFuel = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLE_FUEL_START });
    const vehicles=await axiosService.get('/assets/vehicle/fuels/');
    dispatch({ type: GET_VEHICLE_FUEL_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLE_FUEL_ERROR });
  }
};

export const getVehicleFuelByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/fuels/'+vehicleId+'/');
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};

export const getVehicleBrake = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLE_BRAKE_START });
    const vehicles=await axiosService.get('/assets/vehicle/brakes/');
    dispatch({ type: GET_VEHICLE_BRAKE_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLE_BRAKE_ERROR });
  }
};

export const getVehicleBrakeByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/brakes/'+vehicleId+'/');
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};

export const getVehicleDrive = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLE_DRIVE_START });
    const vehicles=await axiosService.get('/assets/vehicle/drives/');
    dispatch({ type: GET_VEHICLE_DRIVE_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLE_DRIVE_ERROR });
  }
};

export const getVehicleDriveByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/drives/'+vehicleId+'/');
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};

export const getVehicleBody = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLE_BODY_START });
    const vehicles=await axiosService.get('/assets/vehicle/bodies/');
    dispatch({ type: GET_VEHICLE_BODY_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLE_BODY_ERROR });
  }
};

export const getVehicleBodyByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/bodies/'+vehicleId+'/');
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};

export const getVehicleColor = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLE_COLOR_START });
    const vehicles=await axiosService.get('/assets/vehicle/colors/');
    dispatch({ type: GET_VEHICLE_COLOR_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLE_COLOR_ERROR });
  }
};

export const getVehicleColorByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/colors/'+vehicleId+'/');
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const getVehicleOwnership = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLE_OWNERSHIP_START });
    const vehicles=await axiosService.get('/assets/vehicle/ownerships/');
    dispatch({ type: GET_VEHICLE_OWNERSHIP_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLE_OWNERSHIP_ERROR });
  }
};

export const getVehicleOwnershipByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/ownerships/'+vehicleId+'/');
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};

export const getVehicleStatus = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLE_STATUS_START });
    const vehicles=await axiosService.get('/assets/vehicle/statuses/');
    dispatch({ type: GET_VEHICLE_STATUS_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLE_STATUS_ERROR });
  }
};

export const getVehicleStatusByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/statuses/'+vehicleId+'/');
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};

export const getVehicleModel = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLE_MODEL_START });
    const vehicles=await axiosService.get('/assets/vehicle/models/');
    dispatch({ type: GET_VEHICLE_MODEL_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLE_MODEL_ERROR });
  }
};

export const getVehicleModelByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/models/'+vehicleId+'/');
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};

export const getVehicleMake = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLE_MAKE_START });
    const vehicles=await axiosService.get('/assets/vehicle/makes/');
    dispatch({ type: GET_VEHICLE_MAKE_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLE_MAKE_ERROR });
  }
};

export const getVehicleMakeByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/makes/'+vehicleId+'/');
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};

export const getVehicleType = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLE_TYPE_START });
    const vehicles=await axiosService.get('/assets/vehicle/types/');
    dispatch({ type: GET_VEHICLE_TYPE_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLE_TYPE_ERROR });
  }
};

export const getVehicleTypeByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/types/'+vehicleId+'/');
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};