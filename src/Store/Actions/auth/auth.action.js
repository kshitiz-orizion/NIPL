import { toast } from 'react-toastify';

import { setLocalStorage, removeLocalStorage } from '../../../Utils/web-storage';
import axiosService from '../../../Inits/axios';
import history from '../../../Inits/history';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from './auth.actiontype';

export const login = ( {userCredential }) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN_START });
     // var tokenInfo='';
     console.log(userCredential);
    if(userCredential.username==="kk1234" && userCredential.password==="kk1234"){
      console.log('here');
      setLocalStorage('accessToken',"abcd");
    }
    // tokenInfo = await axiosService.post('/users/auth/login/', {mobile:Number(userCredential.username),password:userCredential.password});
    history.push('/home');
    toast.success('You have successfully logged in.');
    // dispatch({ type: LOGIN_SUCCESS, payload: tokenInfo.token });
    dispatch({ type: LOGIN_SUCCESS, payload: "abcd" });
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
     const userInfo = await axiosService.get('/users/users/'+userId+'/');
    return Promise.resolve(userInfo);
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error });
    return Promise.reject(error);
  }
};

export const removeUser = () => async (dispatch, getState) => {
  removeLocalStorage('accessToken');
  dispatch({ type: LOGOUT_SUCCESS });
  history.push('/');
};