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
    const categorys=await axiosService.get('/categories');
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
    category = await axiosService.get('/category/'+categoryId);
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
    const createdCategory=await axiosService.post('/category',categorys);
    toast.success('Successfully created.');
    dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: createdCategory });
    history.push('/category');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_CATEGORY_ERROR });
  }
};

export const editCategory = categorys => async dispatch => {
  try {
    dispatch({ type: EDIT_CATEGORY_START });
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
    dispatch({ type: EDIT_CATEGORY_SUCCESS, payload: categoryEdit });
    history.push('/category');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_CATEGORY_ERROR });
  }
};

export const deleteCategory= category =>async dispatch=>{
  try{
    dispatch({type:DELETE_CATEGORY_START});
    const deletedcategory=await axiosService.delete('/category/'+category.id);
    dispatch({type:DELETE_CATEGORY_SUCCESS,payload:deletedcategory});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_CATEGORY_ERROR });
  }
}

