import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import {
  GET_CATEGORYS_START,
  GET_CATEGORYS_SUCCESS,
  GET_CATEGORYS_ERROR,
  CREATE_CATEGORY_START,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_ERROR,
  EDIT_CATEGORY_START,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_ERROR,
  DELETE_CATEGORY_START,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
} from './category.actiontype';

export const getCategorys = () => async dispatch => {
  try {
    dispatch({ type: GET_CATEGORYS_START });
    const categorys=await axiosService.get('/machine/categories/');
    dispatch({ type: GET_CATEGORYS_SUCCESS, payload: categorys });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_CATEGORYS_ERROR });
  }
};

export const getCategoryByID = categoryId => async dispatch => {
  try {
    var category={name:'',id:''}
    if(categoryId!==null){
    category = await axiosService.get('/machine/categories/'+categoryId);
    }
    return Promise.resolve(category);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createCategory = categorys => async dispatch => {
  try{
    dispatch({type: CREATE_CATEGORY_START});
    const createdCategory=await axiosService.post('/machine/categories/',categorys,{'Content-Type':'application/json'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: createdCategory });
    history.push('/categorys');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_CATEGORY_ERROR });
  }
};

export const editCategory = categorys => async dispatch => {
  try {
    dispatch({ type: EDIT_CATEGORY_START });
    const categoryEdit=await axiosService.put('/machine/categories/'+categorys.id,categorys,{'Content-type':'application/json'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_CATEGORY_SUCCESS, payload: categoryEdit });
    history.push('/categorys');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_CATEGORY_ERROR });
  }
};

export const deleteCategory= category =>async dispatch=>{
  try{
    dispatch({type:DELETE_CATEGORY_START});
    const deletedcategory=await axiosService.delete('/machine/categories/'+category.id);
    dispatch({type:DELETE_CATEGORY_SUCCESS,payload:deletedcategory});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_CATEGORY_ERROR });
  }
}

