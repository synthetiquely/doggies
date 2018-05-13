import { createSelector } from 'reselect';

export const dogsSelector = state => state.dogs.dogs;
export const selectedBreedSelector = state => state.breeds.selectedBreed;
export const paginationLimitSelector = state => state.helpers.limit;
export const paginationOffsetSelector = state => state.helpers.offset;

export const selectPagiableDogs = createSelector(
  dogsSelector,
  paginationLimitSelector,
  paginationOffsetSelector,
  (dogs, limit, offset) => dogs.slice(0, offset + limit),
);
