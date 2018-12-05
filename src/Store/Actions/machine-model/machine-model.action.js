import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
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

export const getMachinemodels = () => async dispatch => {

  try {
    dispatch({ type: GET_MACHINEMODELS_START });
    const machinemodels=await axiosService.get('/assets/machine/models/');
    dispatch({ type: GET_MACHINEMODELS_SUCCESS, payload: machinemodels });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_MACHINEMODELS_ERROR });
  }
};

export const getMachinemodelByID = machinemodelId => async dispatch => {
  try {
    var machinemodel ={name:'',id:''};
    if(machinemodelId!==null){
    machinemodel = await axiosService.get('/assets/machine/models/'+machinemodelId);
    }
    return Promise.resolve(machinemodel);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createMachinemodel = machinemodel => async dispatch => {
  try{
    dispatch({type: CREATE_MACHINEMODEL_START});
    const createdMachinemodel=await axiosService.post('/assets/machine/models/',machinemodel,{'Content-Type':'application/json'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_MACHINEMODEL_SUCCESS, payload: createdMachinemodel });
    history.push('/machinemodels');
  }
  catch(error){
    console.log(error);
    // toast.error(error.message);
    dispatch({ type: CREATE_MACHINEMODEL_ERROR,payload:error });
  }
};

export const editMachinemodel = machinemodel => async dispatch => {
  try {
    dispatch({ type: EDIT_MACHINEMODEL_START });
    const machineEdit=await axiosService.put('/assets/machine/models/'+machinemodel.id+'/',machinemodel,{'Content-Type':'application/json'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_MACHINEMODEL_SUCCESS, payload: machineEdit });
    history.push('/machinemodels');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_MACHINEMODEL_ERROR });
  }
};

export const deleteMachinemodel= machinemodel =>async dispatch=>{
  try{
    dispatch({type:DELETE_MACHINEMODEL_START});
    await axiosService.delete('/assets/machine/models/'+machinemodel.id+'/');
    dispatch({type:DELETE_MACHINEMODEL_SUCCESS,payload:machinemodel});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_MACHINEMODEL_ERROR });
  }
}

