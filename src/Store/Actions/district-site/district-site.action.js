import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import {
  GET_DISTRICTSITES_START,
  GET_DISTRICTSITES_SUCCESS,
  GET_DISTRICTSITES_ERROR,
  CREATE_DISTRICTSITE_START,
  CREATE_DISTRICTSITE_SUCCESS,
  CREATE_DISTRICTSITE_ERROR,
  EDIT_DISTRICTSITE_START,
  EDIT_DISTRICTSITE_SUCCESS,
  EDIT_DISTRICTSITE_ERROR,
  DELETE_DISTRICTSITE_START,
  DELETE_DISTRICTSITE_SUCCESS,
  DELETE_DISTRICTSITE_ERROR,
} from './district-site.actiontype';

export const getDistrictsites = () => async dispatch => {
  try {
    dispatch({ type: GET_DISTRICTSITES_START });
    const districts=await axiosService.get('/location/districts/');
    dispatch({ type: GET_DISTRICTSITES_SUCCESS, payload: districts });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_DISTRICTSITES_ERROR });
  }
};

export const getDistrictsiteByID = districtId => async dispatch => {
  try {
    const district = await axiosService.get('/location/districts/'+districtId);
    return Promise.resolve(district);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createDistrictsite = machines => async dispatch => {
  try{
    dispatch({type: CREATE_DISTRICTSITE_START});
    const createdDistrictsite=await axiosService.post('/location/districts/',machines,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_DISTRICTSITE_SUCCESS, payload: createdDistrictsite });
    history.push('/machine');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_DISTRICTSITE_ERROR });
  }
};

export const editDistrictsite = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_DISTRICTSITE_START });
    const machineEdit=await axiosService.put('/location/districts/'+machines.id,machines,{'Content-type':'multipart/form-data'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_DISTRICTSITE_SUCCESS, payload: machineEdit });
    history.push('/machine');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_DISTRICTSITE_ERROR });
  }
};

export const deleteDistrictsite= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_DISTRICTSITE_START});
    await axiosService.delete('/location/districts/'+machine.id);
    dispatch({type:DELETE_DISTRICTSITE_SUCCESS,payload:machine});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_DISTRICTSITE_ERROR });
  }
}

