import { combineReducers } from 'redux';
import { dogsReducer } from './dogsReducer';
import { breedsReducer } from './breedsReducer';
import { helpersReducer } from './helpersReducer';

export const rootReducer = combineReducers({
  dogs: dogsReducer,
  breeds: breedsReducer,
  helpers: helpersReducer,
});
