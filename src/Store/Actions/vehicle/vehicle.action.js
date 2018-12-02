import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import {
  GET_VEHICLES_START,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_ERROR,
  CREATE_VEHICLE_START,
  CREATE_VEHICLE_SUCCESS,
  CREATE_VEHICLE_ERROR,
  EDIT_VEHICLE_START,
  EDIT_VEHICLE_SUCCESS,
  EDIT_VEHICLE_ERROR,
  DELETE_VEHICLE_START,
  DELETE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_ERROR,
} from './vehicle.actiontype';

export const getVehicles = () => async dispatch => {
  try {
    dispatch({ type: GET_VEHICLES_START });
    const vehicles=await axiosService.get('/assets/vehicle/vehicles/');
    dispatch({ type: GET_VEHICLES_SUCCESS, payload: vehicles });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_VEHICLES_ERROR });
  }
};

export const getVehicleByID = vehicleId => async dispatch => {
  try {
    const vehicles = await axiosService.get('/assets/vehicle/vehicles/'+vehicleId);
    return Promise.resolve(vehicles);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createVehicle = vehicles => async dispatch => {
  try{
    dispatch({type: CREATE_VEHICLE_START});
    const createdVehicle=await axiosService.post('/assets/vehicle/vehicles/',vehicles,{"Content-Type":"application/json"});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_VEHICLE_SUCCESS, payload: createdVehicle });
    history.push('/vehicles');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_VEHICLE_ERROR });
  }
};

export const editVehicle = vehicles => async dispatch => {
  try {
    dispatch({ type: EDIT_VEHICLE_START });
    const vehicleEdit=await axiosService.put('/assets/vehicle/vehicles/'+vehicles.id+'/',vehicles,{"Content-Type":"application/json"});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_VEHICLE_SUCCESS, payload: vehicleEdit });
    history.push('/vehicles');
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({ type: EDIT_VEHICLE_ERROR });
  }
};

export const deleteVehicle= vehicle =>async dispatch=>{
  try{
    dispatch({type:DELETE_VEHICLE_START});
    await axiosService.delete('/assets/vehicle/vehicles/'+vehicle.id+'/');
    dispatch({type:DELETE_VEHICLE_SUCCESS,payload:vehicle});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_VEHICLE_ERROR });
  }
}

