import {
  LOADING_SET,
  ERROR_SET,
  PAGINATION_LIMIT_SET,
  PAGINATION_OFFSET_SET,
} from './actionTypes';

export const setLoading = isLoading => ({
  type: LOADING_SET,
  payload: isLoading,
});

export const setError = error => ({
  type: ERROR_SET,
  payload: error,
});

export const setPaginationLimit = limit => ({
  type: PAGINATION_LIMIT_SET,
  payload: limit,
});

export const setPaginationOffset = offset => ({
  type: PAGINATION_OFFSET_SET,
  payload: offset,
});
