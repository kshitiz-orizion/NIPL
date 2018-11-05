

export default function(state = { list: [] }, action) {
  switch (action.type) {
    case 'GET_EVENT_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'GET_EVENT_SUCCESS':
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case 'GET_EVENT_ERROR':
      return {
        ...state,
        isFetching: false,
      };
    case 'CREATE_EVENT_START':
      return {
        ...state,
        isCreating: true,
      };
    case 'CREATE_EVENT_SUCCESS':
      return {
        ...state,
        isCreating:false,
        list: [...state.list, action.payload],
      };
    case 'CREATE_EVENT_ERROR':
      return {
        ...state,
        isCreating: false,
      };
    default:
      return state;
  }
}
