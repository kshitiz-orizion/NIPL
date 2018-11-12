import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import axios from 'axios';
import {
  GET_SUBCATEGORYS_START,
  GET_SUBCATEGORYS_SUCCESS,
  GET_SUBCATEGORYS_ERROR,
  CREATE_SUBCATEGORY_START,
  CREATE_SUBCATEGORY_SUCCESS,
  CREATE_SUBCATEGORY_ERROR,
  EDIT_SUBCATEGORY_START,
  EDIT_SUBCATEGORY_SUCCESS,
  EDIT_SUBCATEGORY_ERROR,
  DELETE_SUBCATEGORY_START,
  DELETE_SUBCATEGORY_SUCCESS,
  DELETE_SUBCATEGORY_ERROR,
} from './sub-category.actiontype';

import { getError } from '../../../Utils/common.util';

export const getSubcategorys = () => async dispatch => {
  try {
    dispatch({ type: GET_SUBCATEGORYS_START });
    const categorys=await axiosService.get('/sub-categories')
    dispatch({ type: GET_SUBCATEGORYS_SUCCESS, payload: categorys });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_SUBCATEGORYS_ERROR });
  }
};

export const getSubcategoryByID = categoryId => async dispatch => {
  try {
    const record = await axiosService.get('/category/'+categoryId);
    return Promise.resolve(record);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createSubcategory = categorys => async dispatch => {
  try{
    dispatch({type: CREATE_SUBCATEGORY_START});
    let category=new FormData();
    category.append('name',categorys.name);
    category.append('roll',categorys.roll);
    category.append('photo',categorys.image);
    category.append('std',categorys.std);
    category.append('email',categorys.email);
    category.append('dob',categorys.dob.format('YYYY-MM-DD'));
    const createdSubcategory=await axiosService.post('/category',category,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_SUBCATEGORY_SUCCESS, payload: createdSubcategory });
    history.push('/category');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_SUBCATEGORY_ERROR });
  }
};

export const editSubcategory = categorys => async dispatch => {
  try {
    dispatch({ type: EDIT_SUBCATEGORY_START });
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
    dispatch({ type: EDIT_SUBCATEGORY_SUCCESS, payload: categoryEdit });
    history.push('/category');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_SUBCATEGORY_ERROR });
  }
};

export const deleteSubcategory= category =>async dispatch=>{
  try{
    dispatch({type:DELETE_SUBCATEGORY_START});
    const deletedSubcategory=await axiosService.delete('/category/'+category.id);
    dispatch({type:DELETE_SUBCATEGORY_SUCCESS,payload:category});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_SUBCATEGORY_ERROR });
  }
}

