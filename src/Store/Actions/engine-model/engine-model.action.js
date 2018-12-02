import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
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

export const getEnginemodels = () => async dispatch => {
  try {
    dispatch({ type: GET_ENGINEMODELS_START });
    const enginemodels=await axiosService.get('/assets/engine/models/');
    dispatch({ type: GET_ENGINEMODELS_SUCCESS, payload: enginemodels });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_ENGINEMODELS_ERROR });
  }
};

export const getEnginemodelByID = enginemodelId => async dispatch => {
  try {
    var enginemodel={name:'',id:''};
    if(enginemodelId!==null){
    enginemodel = await axiosService.get('/assets/engine/models/'+enginemodelId);
    }
    return Promise.resolve(enginemodel);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createEnginemodel = enginemodel => async dispatch => {
  try{
    dispatch({type: CREATE_ENGINEMODEL_START});
    const createdEnginemodel=await axiosService.post('/assets/engine/models/',enginemodel,{'Content-type':'application/json'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_ENGINEMODEL_SUCCESS, payload: createdEnginemodel });
    history.push('/enginemodels');
  }
  catch(error){
    console.log(error);
    dispatch({ type: CREATE_ENGINEMODEL_ERROR});
  }
};

export const editEnginemodel = enginemodel => async dispatch => {
  try {
    enginemodel.brand_id=enginemodel.enginebrand[0].id;
    const {brand_id,id,name}=enginemodel;
    const newEngineModel={brand_id,id,name};
    dispatch({ type: EDIT_ENGINEMODEL_START });
    const enginemodelEdit=await axiosService.put('/assets/engine/models/'+enginemodel.id,newEngineModel,{'Content-type':'application/json'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_ENGINEMODEL_SUCCESS, payload: enginemodelEdit });
    history.push('/enginemodels');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_ENGINEMODEL_ERROR });
  }
};

export const deleteEnginemodel= enginemodel =>async dispatch=>{
  try{
    dispatch({type:DELETE_ENGINEMODEL_START});
    const deletedenginemodel=await axiosService.delete('/assets/engine/models/'+enginemodel.id);
    dispatch({type:DELETE_ENGINEMODEL_SUCCESS,payload:deletedenginemodel});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_ENGINEMODEL_ERROR });
  }
}

