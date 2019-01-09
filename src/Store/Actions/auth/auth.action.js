import { toast } from 'react-toastify';

import { setLocalStorage, removeLocalStorage } from '../../../Utils/web-storage';
import axiosService from '../../../Inits/axios';
import history from '../../../Inits/history';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from './auth.actiontype';

export const login = ( {userCredential }) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN_START });
    const tokenInfo=await axiosService.post('/rbac/auth/login/',userCredential);
    setLocalStorage('accessToken',tokenInfo.token);
    await dispatch(getCurrentUser("abcd"));
    toast.success('SuccessFully Logged in');
    history.push('/home');
  } catch (error) {
    removeLocalStorage('accessToken');
    dispatch({ type: LOGIN_ERROR, payload: error });
    toast.error(error.message);
  }
};
export const register=({userData})=>async (dispatch,getState)=>{
  try{
    await axiosService.post('/users/auth/register/',{mobile:userData.Registerphone,password:userData.Registerpassword});
    toast.success('You have been registered');
  }
  catch(error){
    toast.error(error.message);
  }
}

export const generateOtp=(user)=> async (dispatch,getState)=>{
  try{
    await axiosService.post('/users/auth/get-otp/',{mobile:user});
    toast.success('Otp sent');
  }
  catch(error){
    toast.error(error.message);
  }
}
export const getCurrentUser = userId => async (dispatch) => {
  try {
     // const userInfo = await axiosService.get('/users/users/'+userId+'/');
    dispatch({type:LOGIN_SUCCESS,payload:userId});
    // return Promise.resolve(userInfo);
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error });
    return Promise.reject(error);
  }
};

export const removeUser = () => async (dispatch, getState) => {
  removeLocalStorage('accessToken');
  removeLocalStorage('role');
  dispatch({ type: LOGOUT_SUCCESS });
  history.push('/');
};

export const refreshToken = (token) => async(dispatch)=>{
  if(token){
    const data={"token":JSON.parse(token)};
    const newToken=await axiosService.post('/rbac/auth/refresh-token/',data);
    setLocalStorage('accessToken',newToken.token);
  }
}