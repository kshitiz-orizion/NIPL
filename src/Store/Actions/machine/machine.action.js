import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import axios from 'axios';
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

import { getError } from '../../../Utils/common.util';

export const getMachines = () => async dispatch => {
  try {
    dispatch({ type: GET_MACHINES_START });
    const machines=await axiosService.get('/machine')
    dispatch({ type: GET_MACHINES_SUCCESS, payload: machines });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_MACHINES_ERROR });
  }
};

export const getMachineByID = machineId => async dispatch => {
  try {
    const record = await axiosService.get('/machine/'+machineId);
    return Promise.resolve(record);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createMachine = machines => async dispatch => {
  try{
    dispatch({type: CREATE_MACHINE_START});
    let machine=new FormData();
    machine.append('name',machines.name);
    machine.append('roll',machines.roll);
    machine.append('photo',machines.image);
    machine.append('std',machines.std);
    machine.append('email',machines.email);
    machine.append('dob',machines.dob.format('YYYY-MM-DD'));
    const createdMachine=await axiosService.post('/machine',machine,{'Content-type':'multipart/form-data'});
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
    let machine=new FormData();
    machine.append('name',machines.name);
    machine.append('roll',machines.roll);
    if(typeof(machines.image)===Object){
    machine.append('photo',machines.image); 
    }
    machine.append('std',machines.std);
    machine.append('email',machines.email);
    machine.append('dob',machines.dob.format('YYYY-MM-DD'));
    const machineEdit=await axiosService.put('/machine/'+machines.id,machine,{'Content-type':'multipart/form-data'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_MACHINE_SUCCESS, payload: machineEdit });
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
    dispatch({type:DELETE_MACHINE_SUCCESS,payload:machine});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_MACHINE_ERROR });
  }
}

