import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';
import axios from 'axios';
import {
  GET_STUDENTS_START,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
  CREATE_STUDENT_START,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_ERROR,
  EDIT_STUDENT_START,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_ERROR,
  DELETE_STUDENT_START,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_ERROR,
} from './student.actiontype';

import { getError } from '../../../Utils/common.util';

export const getStudents = () => async dispatch => {
  try {
    dispatch({ type: GET_STUDENTS_START });
    const students=await axiosService.get('/students')
    dispatch({ type: GET_STUDENTS_SUCCESS, payload: students });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: GET_STUDENTS_ERROR });
  }
};

export const getStudentByID = studentId => async dispatch => {
  try {
    const record = await axiosService.get('/students/'+studentId);
    return Promise.resolve(record);
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    return Promise.reject(error);
  }
};


export const createStudent = students => async dispatch => {
  try{
    dispatch({type: CREATE_STUDENT_START});
    let student=new FormData();
    student.append('name',students.name);
    student.append('roll',students.roll);
    student.append('photo',students.image);
    student.append('std',students.std);
    student.append('email',students.email);
    student.append('dob',students.dob.format('YYYY-MM-DD'));
    const createdStudent=await axiosService.post('/students',student,{'Content-type':'multipart/form-data'});
    toast.success('Successfully created.');
    dispatch({ type: CREATE_STUDENT_SUCCESS, payload: createdStudent });
    history.push('/students');
  }
  catch(error){
     toast.error(error.message);
    dispatch({ type: CREATE_STUDENT_ERROR });
  }
};

export const editStudent = students => async dispatch => {
  try {
    dispatch({ type: EDIT_STUDENT_START });
    let student=new FormData();
    student.append('name',students.name);
    student.append('roll',students.roll);
    if(typeof(students.image)===Object){
    student.append('photo',students.image); 
    }
    student.append('std',students.std);
    student.append('email',students.email);
    student.append('dob',students.dob.format('YYYY-MM-DD'));
    const studentEdit=await axiosService.put('/students/'+students.id,student,{'Content-type':'multipart/form-data'});
    toast.success('Successfully saved.');
    dispatch({ type: EDIT_STUDENT_SUCCESS, payload: studentEdit });
    history.push('/students');
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: EDIT_STUDENT_ERROR });
  }
};

export const deleteStudent= student =>async dispatch=>{
  try{
    dispatch({type:DELETE_STUDENT_START});
    const deletedStudent=await axiosService.delete('/students/'+student.id);
    dispatch({type:DELETE_STUDENT_SUCCESS,payload:student});
    toast.success('Successfully Deleted');
  }
  catch(error){
    toast.error(error.message);
    dispatch({ type: DELETE_STUDENT_ERROR });
  }
}

