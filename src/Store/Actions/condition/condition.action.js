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


export const createCondition = condition => async dispatch => {
  try{
    dispatch({type: CREATE_CONDITION_START});
    const createdCondition=await axiosService.post('/conditions',condition,{'Content-type':'application/json'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_CONDITION_SUCCESS, payload: createdCondition });
    history.push('/conditions');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_CONDITION_ERROR });
  }
};

export const editCondition = condition => async dispatch => {
  try {
    dispatch({ type: EDIT_CONDITION_START });
    const conditionEdit=await axiosService.put('/conditions/'+condition.id,condition,{'Content-type':'application/json'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_CONDITION_SUCCESS, payload: conditionEdit });
    history.push('/conditions');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_CONDITION_ERROR });
  }
};

export const deleteCondition= condition =>async dispatch=>{
  try{
    dispatch({type:DELETE_CONDITION_START});
    const deleteCondition=await axiosService.delete('/conditions/'+condition.id);
    dispatch({type:DELETE_CONDITION_SUCCESS,payload:deleteCondition});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_CONDITION_ERROR });
  }
}

