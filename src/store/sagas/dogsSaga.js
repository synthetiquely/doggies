import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  SELECTED_BREED_SET,
  RANDOM_DOGS_FETCHED,
} from '../actions/actionTypes';
import { setDogs } from '../actions/dogsActions';
import {
  setLoading,
  setError,
  setPaginationOffset,
} from '../actions/helpersActions';
import {
  selectedBreedSelector,
  paginationLimitSelector,
  paginationOffsetSelector,
} from '../selectors/selectors';
import { api } from '../../index';

function* callFetchDogsByBreed() {
  yield put(setLoading(true));
  yield put(setError(null));

  try {
    const breed = yield select(selectedBreedSelector);
    const offset = yield select(setPaginationOffset);

    const dogs = yield call(api.getDoggosByBreed, breed);

    yield put(setLoading(false));

    if (dogs.length) {
      yield put(setDogs(dogs));
      if (offset > 0) {
        yield put(setPaginationOffset(0));
      }
  
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error));
  }
}

function* callFetchRandomDogs() {
  yield put(setLoading(true));
  yield put(setError(null));

  try {
    const limit = yield select(paginationLimitSelector);
    const offset = yield select(paginationOffsetSelector);

    const dogs = yield call(api.getRandomDoggos, offset + limit);

    yield put(setLoading(false));

    if (dogs.length) {
      yield put(setDogs(dogs));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error));
  }
}

/*
* @TODO: Set a watcher for pagination offset.
* If selected dog is random, then make an api getRandomDoggos call,
* else - do nothing
*/
export function* watchDogsActions() {
  yield takeEvery(SELECTED_BREED_SET, callFetchDogsByBreed);
  yield takeEvery(RANDOM_DOGS_FETCHED, callFetchRandomDogs);
}
