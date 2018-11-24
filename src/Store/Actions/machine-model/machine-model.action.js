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
    const machinemodels=await axiosService.get('/machine-models');
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
    machinemodel = await axiosService.get('/machine-models/'+machinemodelId);
    }
    return Promise.resolve(machinemodel);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createMachinemodel = machinemodel => async dispatch => {
  try{
    const newMachine={"brand_id":machinemodel.machinebrand[0].id,"name":machinemodel.name}
    dispatch({type: CREATE_MACHINEMODEL_START});
    const createdMachinemodel=await axiosService.post('/machine-models',newMachine,{'Content-Type':'application/json'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_MACHINEMODEL_SUCCESS, payload: createdMachinemodel });
    history.push('/machinemodels');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_MACHINEMODEL_ERROR });
  }
};

export const editMachinemodel = machinemodel => async dispatch => {
  try {
    const newMachine={"brand_id":machinemodel.machinebrand[0].id,"name":machinemodel.name};
    console.log(machinemodel);
    console.log(newMachine);
    dispatch({ type: EDIT_MACHINEMODEL_START });
    const machineEdit=await axiosService.put('/machine-models/'+machinemodel.id,newMachine,{'Content-Type':'application/json'});
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
    const deleteMachinemodel=await axiosService.delete('/machine-models/'+machinemodel.id);
    dispatch({type:DELETE_MACHINEMODEL_SUCCESS,payload:deleteMachinemodel});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_MACHINEMODEL_ERROR });
  }
}

