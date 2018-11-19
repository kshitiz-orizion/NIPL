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
    const machinebrands=await axiosService.get('/machine-brands');
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
    machinebrand = await axiosService.get('/machine-brands/'+machinebrandId);
    }
    return Promise.resolve(machinebrand);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createMachinebrand = machines => async dispatch => {
  try{
    dispatch({type: CREATE_MACHINEBRAND_START});
    let machine=new FormData();
    machine.append('name',machines.name);
    machine.append('roll',machines.roll);
    machine.append('photo',machines.image);
    machine.append('std',machines.std);
    machine.append('email',machines.email);
    machine.append('dob',machines.dob.format('YYYY-MM-DD'));
    const createdMachinebrand=await axiosService.post('/machine',machine,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_MACHINEBRAND_SUCCESS, payload: createdMachinebrand });
    history.push('/machine');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_MACHINEBRAND_ERROR });
  }
};

export const editMachinebrand = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_MACHINEBRAND_START });
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
    dispatch({ type: EDIT_MACHINEBRAND_SUCCESS, payload: machineEdit });
    history.push('/machine');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_MACHINEBRAND_ERROR });
  }
};

export const deleteMachinebrand= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_MACHINEBRAND_START});
    const machinebrand=await axiosService.delete('/machine/'+machine.id);
    dispatch({type:DELETE_MACHINEBRAND_SUCCESS,payload:machinebrand});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_MACHINEBRAND_ERROR });
  }
}

