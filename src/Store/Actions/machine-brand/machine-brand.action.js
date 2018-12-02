import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import {
  GET_MACHINEBRANDS_START,
  GET_MACHINEBRANDS_SUCCESS,
  GET_MACHINEBRANDS_ERROR,
  CREATE_MACHINEBRAND_START,
  CREATE_MACHINEBRAND_SUCCESS,
  CREATE_MACHINEBRAND_ERROR,
  EDIT_MACHINEBRAND_START,
  EDIT_MACHINEBRAND_SUCCESS,
  EDIT_MACHINEBRAND_ERROR,
  DELETE_MACHINEBRAND_START,
  DELETE_MACHINEBRAND_SUCCESS,
  DELETE_MACHINEBRAND_ERROR,
} from './machine-brand.actiontype';

export const getMachinebrands = () => async dispatch => {
  try {
    dispatch({ type: GET_MACHINEBRANDS_START });
    const machinebrands=await axiosService.get('/assets/machine/brands/');
    dispatch({ type: GET_MACHINEBRANDS_SUCCESS, payload: machinebrands });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_MACHINEBRANDS_ERROR });
  }
};

export const getMachinebrandByID = machinebrandId => async dispatch => {
  try {
    var machinebrand={name:'',id:''};
    if(machinebrandId!==null){
    machinebrand = await axiosService.get('/assets/machine/brands/'+machinebrandId);
    }
    return Promise.resolve(machinebrand);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createMachinebrand = machinebrand => async dispatch => {
  try{
    dispatch({type: CREATE_MACHINEBRAND_START});
    const createdMachinebrand=await axiosService.post('/assets/machine/brands/',machinebrand);
    toast.success('Successfully created.');
    dispatch({ type: CREATE_MACHINEBRAND_SUCCESS, payload: createdMachinebrand });
    history.push('/machinebrands');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_MACHINEBRAND_ERROR });
  }
};

export const editMachinebrand = machinebrand => async dispatch => {
  try {
    dispatch({ type: EDIT_MACHINEBRAND_START });
    const machineEdit=await axiosService.put('/assets/machine/brands/'+machinebrand.id,machinebrand,{'Content-Type':'application/json'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_MACHINEBRAND_SUCCESS, payload: machineEdit });
    history.push('/machinebrands');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_MACHINEBRAND_ERROR });
  }
};

export const deleteMachinebrand= machinebrand =>async dispatch=>{
  try{
    dispatch({type:DELETE_MACHINEBRAND_START});
    const deletedMachinebrand=await axiosService.delete('/assets/machine/brands/'+machinebrand.id);
    dispatch({type:DELETE_MACHINEBRAND_SUCCESS,payload:deletedMachinebrand});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_MACHINEBRAND_ERROR });
  }
}

