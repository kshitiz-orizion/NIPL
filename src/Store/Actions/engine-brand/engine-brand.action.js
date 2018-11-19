import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import {
  GET_ENGINEBRANDS_START,
  GET_ENGINEBRANDS_SUCCESS,
  GET_ENGINEBRANDS_ERROR,
  CREATE_ENGINEBRAND_START,
  CREATE_ENGINEBRAND_SUCCESS,
  CREATE_ENGINEBRAND_ERROR,
  EDIT_ENGINEBRAND_START,
  EDIT_ENGINEBRAND_SUCCESS,
  EDIT_ENGINEBRAND_ERROR,
  DELETE_ENGINEBRAND_START,
  DELETE_ENGINEBRAND_SUCCESS,
  DELETE_ENGINEBRAND_ERROR,
} from './engine-brand.actiontype';

export const getEnginebrands = () => async dispatch => {
  try {
    dispatch({ type: GET_ENGINEBRANDS_START });
    const enginebrands=await axiosService.get('/engine-brands');
    dispatch({ type: GET_ENGINEBRANDS_SUCCESS, payload: enginebrands });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_ENGINEBRANDS_ERROR });
  }
};

export const getEnginebrandByID = engineBrandId => async dispatch => {
  try {
    var enginebrand={name:'',id:''};
    if(engineBrandId!==null){
    enginebrand = await axiosService.get('/engine-brands/'+engineBrandId);
    }
    return Promise.resolve(enginebrand);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createEnginebrand = categorys => async dispatch => {
  try{
    dispatch({type: CREATE_ENGINEBRAND_START});
    let category=new FormData();
    category.append('name',categorys.name);
    category.append('roll',categorys.roll);
    category.append('photo',categorys.image);
    category.append('std',categorys.std);
    category.append('email',categorys.email);
    category.append('dob',categorys.dob.format('YYYY-MM-DD'));
    const createdEnginebrand=await axiosService.post('/category',category,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_ENGINEBRAND_SUCCESS, payload: createdEnginebrand });
    history.push('/category');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_ENGINEBRAND_ERROR });
  }
};

export const editEnginebrand = categorys => async dispatch => {
  try {
    dispatch({ type: EDIT_ENGINEBRAND_START });
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
    dispatch({ type: EDIT_ENGINEBRAND_SUCCESS, payload: categoryEdit });
    history.push('/category');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_ENGINEBRAND_ERROR });
  }
};

export const deleteEnginebrand= category =>async dispatch=>{
  try{
    dispatch({type:DELETE_ENGINEBRAND_START});
    const enginebrand=await axiosService.delete('/category/'+category.id);
    dispatch({type:DELETE_ENGINEBRAND_SUCCESS,payload:enginebrand});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_ENGINEBRAND_ERROR });
  }
}

