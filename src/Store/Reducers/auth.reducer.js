import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from '../Actions/auth/auth.actiontype';

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isProcessing: true,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isProcessing: false,
      };
    }
    case LOGIN_ERROR:
      return {
        ...state,
        isProcessing: false,
        error: action.payload,
        user: null,
        accessToken: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        accessToken: null,
      };
    default:
      return state;
  }
}
