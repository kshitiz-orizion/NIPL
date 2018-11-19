import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import {
  GET_CONDITIONS_START,
  GET_CONDITIONS_SUCCESS,
  GET_CONDITIONS_ERROR,
  CREATE_CONDITION_START,
  CREATE_CONDITION_SUCCESS,
  CREATE_CONDITION_ERROR,
  EDIT_CONDITION_START,
  EDIT_CONDITION_SUCCESS,
  EDIT_CONDITION_ERROR,
  DELETE_CONDITION_START,
  DELETE_CONDITION_SUCCESS,
  DELETE_CONDITION_ERROR,
} from './condition.actiontype';

export const getConditions = () => async dispatch => {
  try {
    dispatch({ type: GET_CONDITIONS_START });
    const conditions=await axiosService.get('/conditions');
    dispatch({ type: GET_CONDITIONS_SUCCESS, payload: conditions });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_CONDITIONS_ERROR });
  }
};

export const getConditionByID = conditionId => async dispatch => {
  try {
    var condition={name:'',id:''};
    if(conditionId!==null){
    condition = await axiosService.get('/conditions/'+conditionId);
    }
    return Promise.resolve(condition);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createCondition = machines => async dispatch => {
  try{
    dispatch({type: CREATE_CONDITION_START});
    let machine=new FormData();
    machine.append('name',machines.name);
    machine.append('roll',machines.roll);
    machine.append('photo',machines.image);
    machine.append('std',machines.std);
    machine.append('email',machines.email);
    machine.append('dob',machines.dob.format('YYYY-MM-DD'));
    const createdCondition=await axiosService.post('/machine',machine,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_CONDITION_SUCCESS, payload: createdCondition });
    history.push('/machine');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_CONDITION_ERROR });
  }
};

export const editCondition = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_CONDITION_START });
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
    dispatch({ type: EDIT_CONDITION_SUCCESS, payload: machineEdit });
    history.push('/machine');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_CONDITION_ERROR });
  }
};

export const deleteCondition= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_CONDITION_START});
    const condition=await axiosService.delete('/machine/'+machine.id);
    dispatch({type:DELETE_CONDITION_SUCCESS,payload:condition});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_CONDITION_ERROR });
  }
}

