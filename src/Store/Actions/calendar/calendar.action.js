import { toast } from 'react-toastify';
import history from '../../../Inits/history';
import axiosService from '../../../Inits/axios';

import { getError } from '../../../Utils/common.util';

export const getEvents = (id) => async dispatch => {
  try {
    dispatch({ type: 'GET_EVENT_START' });
    const events=await axiosService.get('/students/'+id+'/attendance');
    dispatch({ type: 'GET_EVENT_SUCCESS', payload: events });
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: 'GET_EVENT_ERROR' });
  }
};


export const postEvents = (events,changeEvents,ID) => async dispatch => {
  try {
    dispatch({ type: 'CREATE_EVENT_START' });
    for(var i=0;i<events.length;i++){
    	const newevent=await axiosService.post('/students/'+ID+'/attendance',{'date':events[i].date,'present':true},{'Content-type':'application/json'});
    	dispatch({ type: 'CREATE_EVENT_SUCCESS', payload: events });
    }
    for(var i=0;i<changeEvents.length;i++){
    	await axiosService.post('/students/'+ID+'/attendance',{'date':changeEvents[i].date,present:false},{'Content-type':'application/json'});
    }
    toast.success('Sucessfully Saved');
  } catch (error) {
    toast.error(error.message || 'something went wrong.');
    dispatch({ type: 'CREATE_EVENT_ERROR' });
  }
};

