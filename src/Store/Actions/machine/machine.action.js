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

export const getMachines = () => async dispatch => {
  try {
    dispatch({ type: GET_MACHINES_START });
    const machines=await axiosService.get('machine/machines/');
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
    const createdMachine=await axiosService.post('/machines',machines,{"Content-Type":"application/json"});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_MACHINE_SUCCESS, payload: createdMachine });
    history.push('/machines');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_MACHINE_ERROR });
  }
};

export const editMachine = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_MACHINE_START });
    const machineEdit=await axiosService.put('/machines/'+machines.id,machines);
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_MACHINE_SUCCESS, payload: machineEdit });
    history.push('/machines');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_MACHINE_ERROR });
  }
};

export const deleteMachine= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_MACHINE_START});
    const deletedMachine=await axiosService.delete('/machines/'+machine.id);
    dispatch({type:DELETE_MACHINE_SUCCESS,payload:deletedMachine});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_MACHINE_ERROR });
  }
}

