import {
  RANDOM_DOG_FETCHED,
  DOGS_SET,
  SELECTED_DOG_SET,
  RANDOM_DOGS_FETCHED,
} from './actionTypes';

export const setDogs = dogs => ({
  type: DOGS_SET,
  payload: dogs,
});

export const setSelectedDog = selectedDog => ({
  type: SELECTED_DOG_SET,
  payload: selectedDog,
});

export const fetchRandomDog = () => ({
  type: RANDOM_DOG_FETCHED,
});

export const fetchRandomDogs = () => ({
  type: RANDOM_DOGS_FETCHED,
});
