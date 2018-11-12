import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import axios from 'axios';
import {
  GET_ENGINEMODELS_START,
  GET_ENGINEMODELS_SUCCESS,
  GET_ENGINEMODELS_ERROR,
  CREATE_ENGINEMODEL_START,
  CREATE_ENGINEMODEL_SUCCESS,
  CREATE_ENGINEMODEL_ERROR,
  EDIT_ENGINEMODEL_START,
  EDIT_ENGINEMODEL_SUCCESS,
  EDIT_ENGINEMODEL_ERROR,
  DELETE_ENGINEMODEL_START,
  DELETE_ENGINEMODEL_SUCCESS,
  DELETE_ENGINEMODEL_ERROR,
} from './engine-model.actiontype';

import { getError } from '../../../Utils/common.util';

export const getEnginemodels = () => async dispatch => {
  try {
    dispatch({ type: GET_ENGINEMODELS_START });
    const categorys=await axiosService.get('/engine-models');
    dispatch({ type: GET_ENGINEMODELS_SUCCESS, payload: categorys });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_ENGINEMODELS_ERROR });
  }
};

export const getEnginemodelByID = categoryId => async dispatch => {
  try {
    const record = await axiosService.get('/category/'+categoryId);
    return Promise.resolve(record);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createEnginemodel = categorys => async dispatch => {
  try{
    dispatch({type: CREATE_ENGINEMODEL_START});
    let category=new FormData();
    category.append('name',categorys.name);
    category.append('roll',categorys.roll);
    category.append('photo',categorys.image);
    category.append('std',categorys.std);
    category.append('email',categorys.email);
    category.append('dob',categorys.dob.format('YYYY-MM-DD'));
    const createdEnginemodel=await axiosService.post('/category',category,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_ENGINEMODEL_SUCCESS, payload: createdEnginemodel });
    history.push('/category');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_ENGINEMODEL_ERROR });
  }
};

export const editEnginemodel = categorys => async dispatch => {
  try {
    dispatch({ type: EDIT_ENGINEMODEL_START });
    let category=new FormData();
    category.append('name',categorys.name);
    category.append('roll',categorys.roll);
    if(typeof(categorys.image)===Object){
    category.append('photo',categorys.image); 
    }
    category.append('std',categorys.std);
    category.append('email',categorys.email);
    category.append('dob',categorys.dob.format('YYYY-MM-DD'));
    const categoryEdit=await axiosService.put('/category/'+categorys.id,category,{'Content-type':'multipart/form-data'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_ENGINEMODEL_SUCCESS, payload: categoryEdit });
    history.push('/category');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_ENGINEMODEL_ERROR });
  }
};

export const deleteEnginemodel= category =>async dispatch=>{
  try{
    dispatch({type:DELETE_ENGINEMODEL_START});
    const deletedEnginemodel=await axiosService.delete('/category/'+category.id);
    dispatch({type:DELETE_ENGINEMODEL_SUCCESS,payload:category});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_ENGINEMODEL_ERROR });
  }
}

