import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import axios from 'axios';

import { getError } from '../../../Utils/common.util';

export const takeAttendence = (students,markAbsent,date) => async dispatch => {
  try {
    console.log(markAbsent);
    dispatch({ type: 'CREATE_ATTENDENCE_START' });
    const newDate=date.format('YYYY-MM-DD');
    for(var i=0;i<students.length;i++){
      const student=await axiosService.post('/students/'+students[i].student.id+'/attendance',{date:newDate,present:true},{'Content-type':'application/json'})
      dispatch({ type: 'CREATE_ATTENDENCE_SUCCESS', payload: student });
    }
    for(var i=0;i<markAbsent.length;i++){
      const student=await axiosService.post('/students/'+markAbsent[i].student.id+'/attendance',{date:newDate,present:false},{'Content-type':'application/json'})
      dispatch({ type: 'CREATE_ATTENDENCE_SUCCESS', payload: student });
    }
    toast.success('Successfully saved.');
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: 'CREATE_ATTENDENCE_ERROR' });
  }
};


export const todayAttendence = (query) => async dispatch => {
  try {
    var newquery={};
    newquery.date=query.dob.format('YYYY-MM-DD');
    newquery.std=query.std;
    dispatch({ type: 'GET_QUERYSTUDENT_START' });
    const student=await axiosService.get('/attendance',newquery,{'Content-type':'application/json'});
    dispatch({ type: 'GET_QUERYSTUDENT_SUCCESS', payload: student });
    // toast.success('Successfully saved.');
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: 'GET_QUERYSTUDENT_START' });
  }
};