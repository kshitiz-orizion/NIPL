import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import axios from 'axios';
import {
  GET_STATESITES_START,
  GET_STATESITES_SUCCESS,
  GET_STATESITES_ERROR,
  CREATE_STATESITE_START,
  CREATE_STATESITE_SUCCESS,
  CREATE_STATESITE_ERROR,
  EDIT_STATESITE_START,
  EDIT_STATESITE_SUCCESS,
  EDIT_STATESITE_ERROR,
  DELETE_STATESITE_START,
  DELETE_STATESITE_SUCCESS,
  DELETE_STATESITE_ERROR,
} from './state-site.actiontype';

import { getError } from '../../../Utils/common.util';

export const getStatesites = () => async dispatch => {
  try {
    dispatch({ type: GET_STATESITES_START });
    const machines=await axiosService.get('/machine')
    dispatch({ type: GET_STATESITES_SUCCESS, payload: machines });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_STATESITES_ERROR });
  }
};

export const getStatesiteByID = machineId => async dispatch => {
  try {
    const record = await axiosService.get('/machine/'+machineId);
    return Promise.resolve(record);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createStatesite = machines => async dispatch => {
  try{
    dispatch({type: CREATE_STATESITE_START});
    let machine=new FormData();
    machine.append('name',machines.name);
    machine.append('roll',machines.roll);
    machine.append('photo',machines.image);
    machine.append('std',machines.std);
    machine.append('email',machines.email);
    machine.append('dob',machines.dob.format('YYYY-MM-DD'));
    const createdStatesite=await axiosService.post('/machine',machine,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_STATESITE_SUCCESS, payload: createdStatesite });
    history.push('/machine');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_STATESITE_ERROR });
  }
};

export const editStatesite = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_STATESITE_START });
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
    dispatch({ type: EDIT_STATESITE_SUCCESS, payload: machineEdit });
    history.push('/machine');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_STATESITE_ERROR });
  }
};

export const deleteStatesite= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_STATESITE_START});
    const deletedStatesite=await axiosService.delete('/machine/'+machine.id);
    dispatch({type:DELETE_STATESITE_SUCCESS,payload:machine});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_STATESITE_ERROR });
  }
}

