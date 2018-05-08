import { BREEDS_FETCHED, BREEDS_SET } from './actionTypes';

export const fetchBreeds = () => ({
  type: BREEDS_FETCHED,
});

export const setBreeds = breeds => ({
  type: BREEDS_SET,
  payload: breeds,
});
