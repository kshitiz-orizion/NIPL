import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import {
  GET_MACHINES_START,
  GET_MACHINES_SUCCESS,
  GET_MACHINES_ERROR,
  CREATE_MACHINE_START,
  CREATE_MACHINE_SUCCESS,
  CREATE_MACHINE_ERROR,
  EDIT_MACHINE_START,
  EDIT_MACHINE_SUCCESS,
  EDIT_MACHINE_ERROR,
  DELETE_MACHINE_START,
  DELETE_MACHINE_SUCCESS,
  DELETE_MACHINE_ERROR,
  GET_MACHINE_REMARK_START,
  GET_MACHINE_REMARK_SUCCESS,
  GET_MACHINE_REMARK_ERROR,
  DELETE_MACHINE_REMARK_START,
  DELETE_MACHINE_REMARK_SUCCESS,
  DELETE_MACHINE_REMARK_ERROR
} from './machine.actiontype';
export const searchMachines=(data)=>async dispatch=>{
  try{
    dispatch({type:'SEARCH_MACHINES_START'});
    var machines= await axiosService.get('/assets/machine/machines?regnum='+data);
    dispatch({type:'SEARCH_MACHINES_SUCCESS',payload:machines});
  }
  catch(error){
    toast.error('SOMETHING WENT WRONG');
    dispatch({type:'SEARCH_MACHINES_ERROR'});
  }
}
export const filterMachines=(data)=>async dispatch=>{
  var params = new URLSearchParams();
  for(let i=0;i<data.category.length;i++){
    params.append("category",data.category[i])
  }
  for(let i=0;i<data.code.length;i++){
    params.append("code",data.code[i])
  }
  for(let i=0;i<data.snumber.length;i++){
    params.append("snumber",data.snumber[i])
  }
  for(let i=0;i<data.regnum.length;i++){
    params.append("regnum",data.regnum[i])
  }
  for(let i=0;i<data.engine_model;i++){
    params.append("engine_model",data.engine_model[i])
  }
  for(let i=0;i<data.engine_snum;i++){
    params.append("engine_snum",data.engine_snum[i])
  }
  try{
    dispatch({type:'FILTER_MACHINES_START'});
    var machines= await axiosService.get('/assets/machine/machines',params);
    dispatch({type:'FILTER_MACHINES_SUCCESS',payload:machines});
  }
  catch(error){
    toast.error('SOMETHING WENT WRONG');
    dispatch({type:'FILTER_MACHINES_ERROR'});
  }
}
export const getMachines = () => async dispatch => {
  try {
    dispatch({ type: GET_MACHINES_START });
    const machines=await axiosService.get('/assets/machine/machines/');
    dispatch({ type: GET_MACHINES_SUCCESS, payload: machines });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_MACHINES_ERROR });
  }
};

export const getMachineByID = machineId => async dispatch => {
  try {
    const machines = await axiosService.get('/assets/machine/machines/'+machineId);
    return Promise.resolve(machines);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createMachine = machines => async dispatch => {
  try{
    dispatch({type: CREATE_MACHINE_START});
    const createdMachine=await axiosService.post('/assets/machine/machines/',machines,{"Content-Type":"application/json"});
    for (var i=0;i<machines.remarks.length;i++){
      await axiosService.post('/assets/machine/remarks/',{'remark':machines.remarks[i].remark,'machine':createdMachine.id},{"Content-Type":"application/json"})
    }
    toast.success('Successfully created.');
    dispatch({ type: CREATE_MACHINE_SUCCESS, payload: createdMachine });
    history.push('/machines');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_MACHINE_ERROR });
  }
};

export const editMachine = machines => async dispatch => {
  try {
    dispatch({ type: EDIT_MACHINE_START });
    const machineEdit=await axiosService.put('/assets/machine/machines/'+machines.id+'/',machines,{"Content-Type":"application/json"});
    for(var j=0;j<machines.remarks.length;j++){
      if(!machines.remarks[j].id){
        await axiosService.post('/assets/machine/remarks/',{'remark':machines.remarks[j].remark,'machine':machines.id},{"Content-Type":"application/json"});
      }
    }
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_MACHINE_SUCCESS, payload: machineEdit });
    history.push('/machines');
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    dispatch({ type: EDIT_MACHINE_ERROR });
  }
};

export const deleteMachine= machine =>async dispatch=>{
  try{
    dispatch({type:DELETE_MACHINE_START});
    await axiosService.delete('/assets/machine/machines/'+machine.id+'/');
    dispatch({type:DELETE_MACHINE_SUCCESS,payload:machine});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_MACHINE_ERROR });
  }
}

export const getRemarks=machineID=>async dispatch=>{
  try{
    dispatch({type:GET_MACHINE_REMARK_START});
    const remarks=await axiosService.get('/assets/machine/remarks/?machine='+machineID);
    dispatch({type:GET_MACHINE_REMARK_SUCCESS,payload:remarks});
  }
  catch(error){
    toast.error(error.message);
    dispatch({type:GET_MACHINE_REMARK_ERROR});
  }
}

export const deleteRemark=remarkID=>async dispatch=>{
  try{
    dispatch({type:DELETE_MACHINE_REMARK_START});
    await axiosService.delete('/assets/machine/remarks/'+remarkID+'/');
    dispatch({type:DELETE_MACHINE_REMARK_SUCCESS,payload:remarkID});
  }
  catch(error){
    toast.error(error.message);
    dispatch({type:DELETE_MACHINE_REMARK_ERROR});
  }
}