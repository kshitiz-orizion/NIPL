import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import {
  GET_SITES_START,
  GET_SITES_SUCCESS,
  GET_SITES_ERROR,
  CREATE_SITE_START,
  CREATE_SITE_SUCCESS,
  CREATE_SITE_ERROR,
  EDIT_SITE_START,
  EDIT_SITE_SUCCESS,
  EDIT_SITE_ERROR,
  DELETE_SITE_START,
  DELETE_SITE_SUCCESS,
  DELETE_SITE_ERROR,
} from './site.actiontype';

export const getSites = () => async dispatch => {
  try {
    dispatch({ type: GET_SITES_START });
    const sites=await axiosService.get('/sites')
    dispatch({ type: GET_SITES_SUCCESS, payload: sites });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_SITES_ERROR });
  }
};

export const getSiteByID = siteId => async dispatch => {
  try {
    var site={name:'',id:''};
    if(siteId!==null){
    site = await axiosService.get('/sites/'+siteId);
    }
    return Promise.resolve(site);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createSite = machines => async dispatch => {
  try{
    dispatch({type: CREATE_SITE_START});
    let machine=new FormData();
    machine.append('name',machines.name);
    machine.append('roll',machines.roll);
    machine.append('photo',machines.image);
    machine.append('std',machines.std);
    machine.append('email',machines.email);
    machine.append('dob',machines.dob.format('YYYY-MM-DD'));
    const createdsite=await axiosService.post('/machine',machine,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_SITE_SUCCESS, payload: createdsite });
    history.push('/machine');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_SITE_ERROR });
  }
};

export const editSite = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_SITE_START });
    let machine=new FormData();
    machine.append('name',machines.name);
    machine.append('roll',machines.roll);
    if(typeof(machines.image)===Object){
    machine.append('photo',machines.image); 
    }
    machine.append('std',machines.std);
    machine.append('email',machines.email);
    machine.append('dob',machines.dob.format('YYYY-MM-DD'));
    const machineEdit=await axiosService.put('/machine/'+machines.id,machine,{'Content-type':'multipart/form-data'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_SITE_SUCCESS, payload: machineEdit });
    history.push('/machine');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_SITE_ERROR });
  }
};

export const deleteSite= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_SITE_START});
    const deletedsite=await axiosService.delete('/machine/'+machine.id);
    dispatch({type:DELETE_SITE_SUCCESS,payload:deletedsite});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_SITE_ERROR });
  }
}

