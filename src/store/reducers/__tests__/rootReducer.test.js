import { createStore } from 'redux';
import { rootReducer } from '../rootReducer';
import { breedsReducer } from '../breedsReducer';
import { dogsReducer } from '../dogsReducer';
import { helpersReducer } from '../helpersReducer';
import { DOGS_SET, BREEDS_SET, LOADING_SET } from '../../actions/actionTypes';

describe('Redux: Root Reducer', () => {
  it('should return initial state that matchs what child reducers return given an empty action', () => {
    const store = createStore(rootReducer);
    expect(store.getState().dogs).toEqual(dogsReducer(undefined, {
      selectedDog: null,
      dogs: [],
    }));
    expect(store.getState().breeds).toEqual(breedsReducer(undefined, {
      selectedBreed: null,
      breeds: [],
    }));
    expect(store.getState().helpers).toEqual(helpersReducer(undefined, {
      isLoading: false,
      error: null,
      limit: 15,
      offset: 0,
    }));
  });

  it('should verify, that child reducers handle its actions', () => {
    const store = createStore(rootReducer);
    const dogAction = {
      type: DOGS_SET,
      payload: ['1', '2', '3'],
    };
    const breedAction = {
      type: BREEDS_SET,
      payload: ['4', '5', '6'],
    };
    const helperAction = {
      type: LOADING_SET,
      payload: true,
    };
    store.dispatch(dogAction);
    store.dispatch(breedAction);
    store.dispatch(helperAction);
    expect(store.getState().dogs).toEqual(dogsReducer(undefined, dogAction));
    expect(store.getState().breeds).toEqual(breedsReducer(undefined, breedAction));
    expect(store.getState().helpers).toEqual(helpersReducer(undefined, helperAction));
  });
});
