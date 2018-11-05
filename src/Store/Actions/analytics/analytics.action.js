import { toast } from 'react-toastify';

import axiosService from '../../../Inits/axios';


export const Searches=()=> async dispatch=>{
	try{
		const searched = await axiosService.get('/records/analytics/searches/');
    	return Promise.resolve(searched);
	}
	catch(error){
		toast.error(error.message || 'something went wrong.');
    	return Promise.reject(error);
	}
}

export const Counts=()=> async dispatch=>{
	try{
		const counts = await axiosService.get('/records/analytics/counts/');
    	return Promise.resolve(counts);
	}
	catch(error){
		toast.error(error.message || 'something went wrong.');
    	return Promise.reject(error);
	}
}

export const Records=()=>async dispatch=>{
	try{
		const records=await axiosService.get('/records/analytics/records/');
		return Promise.resolve(records);
	}
	catch(error){
		toast.error(error.message || 'something went wrong.');
		return Promise.reject(error);
	}
}