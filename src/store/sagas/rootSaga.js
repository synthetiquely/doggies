import { all, fork } from 'redux-saga/effects';
import { watchBreedsActions } from './breedsSaga';
import { watchDogsActions } from './dogsSaga';

export function* rootSaga() {
  yield all([fork(watchBreedsActions), fork(watchDogsActions)]);
}
