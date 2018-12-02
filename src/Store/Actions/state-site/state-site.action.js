import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
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

export const getStatesites = () => async dispatch => {
  try {
    dispatch({ type: GET_STATESITES_START });
    const states=await axiosService.get('/location/states/');
    dispatch({ type: GET_STATESITES_SUCCESS, payload: states });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_STATESITES_ERROR });
  }
};

export const getStatesiteByID = stateId => async dispatch => {
  try {
    var state={name:'',id:''};
    if(stateId!==null){
    state = await axiosService.get('/location/states/'+stateId);
    }
    return Promise.resolve(state);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createStatesite = machines => async dispatch => {
  try{
    dispatch({type: CREATE_STATESITE_START});
    const createdStatesite=await axiosService.post('/machine',machines,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_STATESITE_SUCCESS, payload: createdStatesite });
    history.push('/machines');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_STATESITE_ERROR });
  }
};

export const editStatesite = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_STATESITE_START });
    const machineEdit=await axiosService.put('/machine/'+machines.id+'/',machines,{'Content-type':'multipart/form-data'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_STATESITE_SUCCESS, payload: machineEdit });
    history.push('/machines');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_STATESITE_ERROR });
  }
};

export const deleteStatesite= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_STATESITE_START});
    await axiosService.delete('/location/states/'+machine.id);
    dispatch({type:DELETE_STATESITE_SUCCESS,payload:machine});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_STATESITE_ERROR });
  }
}

