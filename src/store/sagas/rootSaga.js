import { all, fork } from 'redux-saga/effects';
import { watchBreedsActions } from './breedsSaga';

export function* rootSaga() {
  yield all([fork(watchBreedsActions)]);
}
