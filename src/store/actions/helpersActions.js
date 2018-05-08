import { LOADING_SET, ERROR_SET } from './actionTypes';

export const setLoading = isLoading => ({
  type: LOADING_SET,
  payload: isLoading,
});

export const setError = error => ({
  type: ERROR_SET,
  payload: error,
});
