import { call, put, take, takeEvery } from 'redux-saga/effects';
import { SELECTED_BREED_SET } from '../actions/actionTypes';
import { setDogs } from '../actions/dogsActions';
import { setLoading, setError } from '../actions/helpersActions';
import { api } from '../../index';

function* callFetchDogsByBreed() {
  yield put(setLoading(true));
  yield put(setError(null));

  try {
    const breed = yield take(SELECTED_BREED_SET);
    const dogs = yield call(api.getDoggosByBreed(breed));
    yield put(setLoading(false));
    if (dogs.length) {
      yield put(setDogs(dogs));
    }
  } catch (error) {
    yield put(setLoading(false));
    yield put(setError(error));
  }
}

export function* watchDogsActions() {
  yield takeEvery(SELECTED_BREED_SET, callFetchDogsByBreed);
}
