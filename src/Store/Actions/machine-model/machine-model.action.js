import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import axios from 'axios';
import {
  GET_MACHINEMODELS_START,
  GET_MACHINEMODELS_SUCCESS,
  GET_MACHINEMODELS_ERROR,
  CREATE_MACHINEMODEL_START,
  CREATE_MACHINEMODEL_SUCCESS,
  CREATE_MACHINEMODEL_ERROR,
  EDIT_MACHINEMODEL_START,
  EDIT_MACHINEMODEL_SUCCESS,
  EDIT_MACHINEMODEL_ERROR,
  DELETE_MACHINEMODEL_START,
  DELETE_MACHINEMODEL_SUCCESS,
  DELETE_MACHINEMODEL_ERROR,
} from './machine-model.actiontype';

import { getError } from '../../../Utils/common.util';

export const getMachinemodels = () => async dispatch => {
  try {
    dispatch({ type: GET_MACHINEMODELS_START });
    const machines=await axiosService.get('/machine-models');
    dispatch({ type: GET_MACHINEMODELS_SUCCESS, payload: machines });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_MACHINEMODELS_ERROR });
  }
};

export const getMachinemodelByID = machineId => async dispatch => {
  try {
    const record = await axiosService.get('/machine/'+machineId);
    return Promise.resolve(record);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createMachinemodel = machines => async dispatch => {
  try{
    dispatch({type: CREATE_MACHINEMODEL_START});
    let machine=new FormData();
    machine.append('name',machines.name);
    machine.append('roll',machines.roll);
    machine.append('photo',machines.image);
    machine.append('std',machines.std);
    machine.append('email',machines.email);
    machine.append('dob',machines.dob.format('YYYY-MM-DD'));
    const createdMachinemodel=await axiosService.post('/machine',machine,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_MACHINEMODEL_SUCCESS, payload: createdMachinemodel });
    history.push('/machine');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_MACHINEMODEL_ERROR });
  }
};

export const editMachinemodel = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_MACHINEMODEL_START });
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
    dispatch({ type: EDIT_MACHINEMODEL_SUCCESS, payload: machineEdit });
    history.push('/machine');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_MACHINEMODEL_ERROR });
  }
};

export const deleteMachinemodel= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_MACHINEMODEL_START});
    const deletedMachinemodel=await axiosService.delete('/machine/'+machine.id);
    dispatch({type:DELETE_MACHINEMODEL_SUCCESS,payload:machine});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_MACHINEMODEL_ERROR });
  }
}

