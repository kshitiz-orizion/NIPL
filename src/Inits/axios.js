import axios from 'axios';
import { get } from 'lodash';

import { getLocalStorage } from '../Utils/web-storage';
//import { removeUser } from '../store/actions/auth/auth.action';

var serverUrl =process.env.REACT_APP_NIPL_URL;
var instance = axios.create({
  baseURL: serverUrl,
});
export var axiosInterceptor = store => {
  instance.interceptors.request.use(
    async function(config) {
      var accessToken = getLocalStorage('accessToken');
      if (accessToken) {
        //config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    response => {
        return response.data;
    },
    errorResponse => {
      // if (get(errorResponse, 'response.status') === 401) {
      //   store.dispatch(removeUser());
      // }
      return Promise.reject(get(errorResponse, 'response.data') || { message: 'Something went wrong!' });
    }
  );
};

const axiosService = {
  get: (endPoint, data, headers = {}) => {
    const config = {};
    if (!endPoint) {
      throw Error('endPoint is required params');
    } else {
      if (data) {
        config.params = data;
      }
      // const accessToken=getLocalStorage('accessToken');
      // headers={'Authorization':`Bearer ${accessToken}`}
      config.headers = headers;
      return instance.get(endPoint,config);
    }
  },
  post: (endPoint, data, headers = {}) => {
    var instance = axios.create({
      baseURL: 'https://cors-anywhere.herokuapp.com/'+process.env.REACT_APP_NIPL_URL,
    });
  instance.interceptors.response.use(
    response => {
        return response.data;
    },
    errorResponse => {
      // if (get(errorResponse, 'response.status') === 401) {
      //   store.dispatch(removeUser());
      // }
      return Promise.reject(get(errorResponse, 'response.data') || { message: 'Something went wrong!' });
    }
  );
    if (!(endPoint || !data)) {
      throw Error('endPoint and data are required params');
    }
    return instance.post(endPoint, data, { headers });
  },
  put: (endPoint, data, headers = {}) => {
    if (!(endPoint || !data)) {
      throw Error('endPoint and data are required params');
    }
    return instance.put(endPoint, data,{ headers });
  },
  delete: (endPoint, data, headers = {}) => {
    const config = {};
    if (!endPoint) {
      throw Error('endPoint is required params');
    } else {
      config.headers = headers;
      return instance.delete(endPoint,{data:data}, config);
    }
  },
};

export default axiosService;
