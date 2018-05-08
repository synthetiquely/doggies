import { LOADING_SET, ERROR_SET } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
};

export const helpersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SET:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ERROR_SET:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
