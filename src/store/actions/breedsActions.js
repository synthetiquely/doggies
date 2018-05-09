import { BREEDS_FETCHED, BREEDS_SET, SELECTED_BREED_SET } from './actionTypes';

export const fetchBreeds = () => ({
  type: BREEDS_FETCHED,
});

export const setBreeds = breeds => ({
  type: BREEDS_SET,
  payload: breeds,
});

export const setSelectedBreed = selectedBreed => ({
  type: SELECTED_BREED_SET,
  payload: selectedBreed,
});
