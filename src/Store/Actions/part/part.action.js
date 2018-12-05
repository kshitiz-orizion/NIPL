import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import {
  GET_PARTS_START,
  GET_PARTS_SUCCESS,
  GET_PARTS_ERROR,
  CREATE_PART_START,
  CREATE_PART_SUCCESS,
  CREATE_PART_ERROR,
  EDIT_PART_START,
  EDIT_PART_SUCCESS,
  EDIT_PART_ERROR,
  DELETE_PART_START,
  DELETE_PART_SUCCESS,
  DELETE_PART_ERROR,
} from './part.actiontype';

export const getParts = () => async dispatch => {
  try {
    dispatch({ type: GET_PARTS_START });
    const parts=await axiosService.get('/assets/machine/parts/');
    dispatch({ type: GET_PARTS_SUCCESS, payload: parts });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_PARTS_ERROR });
  }
};

export const getPartByID = partId => async dispatch => {
  try {
    const parts = await axiosService.get('/assets/machine/parts/'+partId);
    return Promise.resolve(parts);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createPart = parts => async dispatch => {
  try{
    dispatch({type: CREATE_PART_START});
    const createdPart=await axiosService.post('/assets/machine/parts/',parts,{"Content-Type":"application/json"});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_PART_SUCCESS, payload: createdPart });
    history.push('/parts');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_PART_ERROR });
  }
};

export const editPart = parts => async dispatch => {
  try {
    dispatch({ type: EDIT_PART_START });
    const partEdit=await axiosService.put('/assets/machine/parts/'+parts.id+'/',parts,{"Content-Type":"application/json"});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_PART_SUCCESS, payload: partEdit });
    history.push('/parts');
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({ type: EDIT_PART_ERROR });
  }
};

export const deletePart= part =>async dispatch=>{
  try{
    dispatch({type:DELETE_PART_START});
    await axiosService.delete('/assets/machine/parts/'+part.id+'/');
    dispatch({type:DELETE_PART_SUCCESS,payload:part});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_PART_ERROR });
  }
}