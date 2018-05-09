import { call, put, takeEvery } from 'redux-saga/effects';
import { BREEDS_FETCHED } from '../actions/actionTypes';
import { setBreeds, setSelectedBreed } from '../actions/breedsActions';
import { setLoading, setError } from '../actions/helpersActions';
import { api } from '../../index';

function* callFetchBreeds() {
  yield put(setLoading(true));
  yield put(setError(null));

  try {
    const breeds = yield call(api.getBreedsList);
    yield put(setLoading(false));
    if (breeds.length) {
      yield put(setBreeds(breeds));
      yield put(setSelectedBreed(breeds[0]));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error));
  }
}

export function* watchBreedsActions() {
  yield takeEvery(BREEDS_FETCHED, callFetchBreeds);
}
