import { BREEDS_SET } from '../actions/actionTypes';

const initialState = {
  breeds: [],
};

export const breedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BREEDS_SET:
      return {
        ...state,
        breeds: [...state.breeds, ...action.payload],
      };
    default:
      return state;
  }
};
