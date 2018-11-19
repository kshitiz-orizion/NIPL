import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import {
  GET_MACHINES_START,
  GET_MACHINES_SUCCESS,
  GET_MACHINES_ERROR,
  CREATE_MACHINE_START,
  CREATE_MACHINE_SUCCESS,
  CREATE_MACHINE_ERROR,
  EDIT_MACHINE_START,
  EDIT_MACHINE_SUCCESS,
  EDIT_MACHINE_ERROR,
  DELETE_MACHINE_START,
  DELETE_MACHINE_SUCCESS,
  DELETE_MACHINE_ERROR,
} from './machine.actiontype';

// const machines=[
//     {
//         "warranty": 4,
//         "engine_serial_no": "1231414",
//         "code": "Code-2",
//         "chassis_no": "CH 1200",
//         "serial_no": "SR100",
//         "brand_id": 123,
//         "price": "100.00",
//         "reg_no": "123141",
//         "id": "a1283eea-831d-4637-bed4-86241f9768bc",
//         "category_id": 123,
//         "condition_id": 123,
//         "description": "Testing purpose",
//         "name": "Machine1",
//         "purchase_year": 2016,
//         "site_id": 123,
//         "engine_model_id": 123,
//         "sub_category_id": 123,
//         "model_id": 123,
//         "engine_brand_id":123,
//         "remark": "very nice vehicle"
//     },
//     {
//         "warranty": 4,
//         "engine_serial_no": "1231414",
//         "code": "Code-3",
//         "chassis_no": "CH 1200",
//         "serial_no": "SR100",
//         "brand_id": 213,
//         "price": "100.00",
//         "reg_no": "123141",
//         "id": "a1283eea-831d-4637-bed4-86241f9768bx",
//         "category_id": 213,
//         "condition_id": 213,
//         "description": "Testing purpose",
//         "name": "Machine2",
//         "purchase_year": 2016,
//         "site_id": 213,
//         "engine_model_id": 213,
//         "sub_category_id": 213,
//         "model_id": 213,
//         "engine_brand_id": 213,
//         "remark": "very nice vehicle"
//     }]

export const getMachines = () => async dispatch => {
  try {
    dispatch({ type: GET_MACHINES_START });
    const machines=await axiosService.get('/machines');
    dispatch({ type: GET_MACHINES_SUCCESS, payload: machines });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_MACHINES_ERROR });
  }
};

export const getMachineByID = machineId => async dispatch => {
  try {
    const machines = await axiosService.get('/machines/'+machineId);
    return Promise.resolve(machines);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createMachine = machines => async dispatch => {
  try{
    dispatch({type: CREATE_MACHINE_START});
    const createdMachine=await axiosService.post('/machine',machines);
    toast.success('Successfully created.');
    dispatch({ type: CREATE_MACHINE_SUCCESS, payload: createdMachine });
    history.push('/machine');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_MACHINE_ERROR });
  }
};

export const editMachine = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_MACHINE_START });
    // const machineEdit=await axiosService.put('/machine/'+machines.id,machines);
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_MACHINE_SUCCESS, payload: "null" });
    history.push('/machine');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_MACHINE_ERROR });
  }
};

export const deleteMachine= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_MACHINE_START});
    const deletedMachine=await axiosService.delete('/machine/'+machine.id);
    dispatch({type:DELETE_MACHINE_SUCCESS,payload:deletedMachine});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_MACHINE_ERROR });
  }
}

