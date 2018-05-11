import {
  LOADING_SET,
  ERROR_SET,
  PAGINATION_LIMIT_SET,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  limit: 15,
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
    case PAGINATION_LIMIT_SET:
      return {
        ...state,
        limit: action.payload,
      };
    default:
      return state;
  }
};
