export default function(state = { list: [] }, action) {
  switch (action.type) {
    case 'CREATE_ATTENDENCE_START':
      return {
        ...state,
        isCreating: true,
      };
    case 'CREATE_ATTENDENCE_SUCCESS':
      return {
        ...state,
        isCreating: false,
        list: [...state.list, action.payload],
      };
    case 'CREATE_ATTENDENCE_ERROR':
      return {
        ...state,
        isCreating: false,
      };
    default:
      return state;
  }
}