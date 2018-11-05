 export default function(state = { list: [] }, action) { 
  switch (action.type) {
    case 'GET_QUERYSTUDENT_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'GET_QUERYSTUDENT_SUCCESS':
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case 'GET_QUERYSTUDENT_ERROR':
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}