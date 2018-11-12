import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import axios from 'axios';
import {
  GET_DISTRICTSITES_START,
  GET_DISTRICTSITES_SUCCESS,
  GET_DISTRICTSITES_ERROR,
  CREATE_DISTRICTSITE_START,
  CREATE_DISTRICTSITE_SUCCESS,
  CREATE_DISTRICTSITE_ERROR,
  EDIT_DISTRICTSITE_START,
  EDIT_DISTRICTSITE_SUCCESS,
  EDIT_DISTRICTSITE_ERROR,
  DELETE_DISTRICTSITE_START,
  DELETE_DISTRICTSITE_SUCCESS,
  DELETE_DISTRICTSITE_ERROR,
} from './district-site.actiontype';

import { getError } from '../../../Utils/common.util';

export const getDistrictsites = () => async dispatch => {
  try {
    dispatch({ type: GET_DISTRICTSITES_START });
    const machines=await axiosService.get('/machine')
    dispatch({ type: GET_DISTRICTSITES_SUCCESS, payload: machines });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_DISTRICTSITES_ERROR });
  }
};

export const getDistrictsiteByID = machineId => async dispatch => {
  try {
    const record = await axiosService.get('/machine/'+machineId);
    return Promise.resolve(record);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createDistrictsite = machines => async dispatch => {
  try{
    dispatch({type: CREATE_DISTRICTSITE_START});
    let machine=new FormData();
    machine.append('name',machines.name);
    machine.append('roll',machines.roll);
    machine.append('photo',machines.image);
    machine.append('std',machines.std);
    machine.append('email',machines.email);
    machine.append('dob',machines.dob.format('YYYY-MM-DD'));
    const createdDistrictsite=await axiosService.post('/machine',machine,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_DISTRICTSITE_SUCCESS, payload: createdDistrictsite });
    history.push('/machine');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_DISTRICTSITE_ERROR });
  }
};

export const editDistrictsite = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_DISTRICTSITE_START });
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
    dispatch({ type: EDIT_DISTRICTSITE_SUCCESS, payload: machineEdit });
    history.push('/machine');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_DISTRICTSITE_ERROR });
  }
};

export const deleteDistrictsite= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_DISTRICTSITE_START});
    const deletedDistrictsite=await axiosService.delete('/machine/'+machine.id);
    dispatch({type:DELETE_DISTRICTSITE_SUCCESS,payload:machine});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_DISTRICTSITE_ERROR });
  }
}

