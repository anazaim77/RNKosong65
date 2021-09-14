import {delay, takeEvery, takeLatest} from 'redux-saga/effects';
import types from '../actions/types';

export function* authSaga() {
  yield takeLatest(types.auth.LOGIN_SG, function* (action) {
    console.log(`login`, action);
    yield delay(1000);
  });
}
