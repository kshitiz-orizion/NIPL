import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
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

export const getSubcategorys = () => async dispatch => {
  try {
    dispatch({ type: GET_SUBCATEGORYS_START });
    const subcategorys=await axiosService.get('/sub-categories');
    dispatch({ type: GET_SUBCATEGORYS_SUCCESS, payload: subcategorys });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_SUBCATEGORYS_ERROR });
  }
};

export const getSubcategoryByID = subcategoryId => async dispatch => {
  try {
    var subcategory={name:'',id:''};
    if(subcategoryId!==null){
    subcategory = await axiosService.get('/sub-categories/'+subcategoryId);
    }
    return Promise.resolve(subcategory);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createSubcategory = subcategorys => async dispatch => {
  try{
    dispatch({type: CREATE_SUBCATEGORY_START});
    const createdSubcategory=await axiosService.post('/sub-categories',subcategorys,{'Content-type':'application/json'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_SUBCATEGORY_SUCCESS, payload: createdSubcategory });
    history.push('/subcategorys');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_SUBCATEGORY_ERROR });
  }
};

export const editSubcategory = subcategorys => async dispatch => {
  try {
    dispatch({ type: EDIT_SUBCATEGORY_START });
    const subcategoryEdit=await axiosService.put('/sub-categories/'+subcategorys.id,subcategorys,{'Content-Type':'application/json'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_SUBCATEGORY_SUCCESS, payload: subcategoryEdit });
    history.push('/subcategorys');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_SUBCATEGORY_ERROR });
  }
};

export const deleteSubcategory= subcategory =>async dispatch=>{
  try{
    dispatch({type:DELETE_SUBCATEGORY_START});
    const deleteSubcategory=await axiosService.delete('/sub-categories/'+subcategory.id);
    dispatch({type:DELETE_SUBCATEGORY_SUCCESS,payload:deleteSubcategory});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_SUBCATEGORY_ERROR });
  }
}

