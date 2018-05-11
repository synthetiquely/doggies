import { DOGS_SET, SELECTED_DOG_SET } from '../actions/actionTypes';

const initialState = {
  selectedDog: null,
  dogs: [],
};

export const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_DOG_SET: {
      return {
        ...state,
        selectedDog: action.payload,
      };
    }
    case DOGS_SET: {
      return {
        ...state,
        dogs: action.payload,
      };
    }
    default:
      return state;
  }
};
