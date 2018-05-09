import { BREEDS_SET, SELECTED_BREED_SET } from '../actions/actionTypes';

const initialState = {
  selectedBreed: null,
  breeds: [],
};

export const breedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BREEDS_SET:
      return {
        ...state,
        breeds: [...state.breeds, ...action.payload],
      };
    case SELECTED_BREED_SET:
      return {
        ...state,
        selectedBreed: action.payload,
      };
    default:
      return state;
  }
};
